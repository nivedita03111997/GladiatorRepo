using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using FinanceGladiatorProjectApp.Models;

namespace FinanceGladiatorProjectApp.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CardController : ApiController
    {
        dbproject_NEWEntities1 entities = new dbproject_NEWEntities1();

        [HttpGet]
        public HttpResponseMessage Get(int id)//customerId
        {
            tbl_Card card = entities.tbl_Card.Where(c => c.Customer_Id == id).FirstOrDefault();
            if(card!=null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, card);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Card does not exist..");
            }

        }

        [HttpPost]
        public HttpResponseMessage Post([FromUri]int id, [FromBody]tbl_Customer customer)
        {
            System.Data.Entity.DbContextTransaction transaction = entities.Database.BeginTransaction();
            tbl_Card card = new tbl_Card();
            try
            {
                card.Customer_Id = customer.Customer_Id;
                card.Card_Number = RandomDigits(10);
                card.Valid_till = DateTime.Today.AddYears(2).Date;
                card.Card_Type = customer.Card_Type;
                card.Total_credit = customer.Card_Type == "gold" ? 50000 : 100000;
                card.credit_used = 0;
                card.Card_cost = 1500;
                card.Status = "Activated";
                tbl_Admin admin = entities.tbl_Admin.Where(a => a.Admin_Id == id).FirstOrDefault();
            card.ApprovedBy = id;
            entities.tbl_Card.Add(card);
            entities.SaveChanges();
            transaction.Commit();
            return Request.CreateResponse(HttpStatusCode.Created, card);
            }
            catch (Exception)
            {
                transaction.Rollback();
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Could not add card");
            }
        }

        public string RandomDigits(int length)
        {
            var random = new Random();
            string s = string.Empty;
            for (int i = 0; i < length; i++)
                s = String.Concat(s, random.Next(10).ToString());
            return s;
        }
    }
}
