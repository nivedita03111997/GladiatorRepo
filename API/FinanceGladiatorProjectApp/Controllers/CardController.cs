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
        dbproject_NEWEntities entities = new dbproject_NEWEntities();

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
                tbl_Card c = entities.tbl_Card.Where(ca => ca.Customer_Id == customer.Customer_Id).FirstOrDefault();
                if(c!=null)
                   return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Customer already activated.");
                proc_ActivateCustomer_Result rslt = entities.proc_ActivateCustomer(customer.Customer_Id).FirstOrDefault();
                card.Customer_Id = customer.Customer_Id;
                card.Card_Number = RandomDigits(10);
                card.Valid_till = DateTime.Today.AddYears(2).Date;
                card.Card_Type = customer.Card_Type;
                card.Total_credit = customer.Card_Type == "Gold" ? 50000 : 100000;
                card.credit_used = 0;
                card.Card_cost = customer.Card_Type == "Gold" ? 1000 : 2000;
                card.Status = "Activated";
                tbl_Admin admin = entities.tbl_Admin.Where(a => a.Admin_Id == id).FirstOrDefault();
            card.ApprovedBy = id;
            entities.tbl_Card.Add(card);
            entities.SaveChanges();
            proc_ActivateCard_Result result = entities.proc_ActivateCard(customer.Customer_Id).FirstOrDefault();
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
