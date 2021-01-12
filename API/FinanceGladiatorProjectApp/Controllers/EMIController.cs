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
    public class EMIController : ApiController
    {
        dbproject_NEWEntities entities = new dbproject_NEWEntities();

        [HttpPost]
        public HttpResponseMessage Post(int cardId,int prodId,int tenurePeriod)
        {
            System.Data.Entity.DbContextTransaction transaction = entities.Database.BeginTransaction();
            tbl_EMI emi = new tbl_EMI();
      try
      {
        emi.Tenure_period = tenurePeriod;
        tbl_Product prod = entities.tbl_Product.Where(p => p.Product_Id == prodId).FirstOrDefault();
        emi.Product_cost = prod.Product_Cost;
        emi.Total_Amount_Paid = (prod.Product_Cost / tenurePeriod) + prod.Processing_fees;
        emi.Card_Id = cardId;
        emi.Product_Id = prodId;
        emi.EMI_Start_Date = DateTime.Today;
        emi.EMI_Due_Date = DateTime.Today.AddMonths(1);
        emi.emiPerMonth = (prod.Product_Cost / tenurePeriod);
        emi.prodName = prod.Product_Name;
        entities.tbl_EMI.Add(emi);
        entities.SaveChanges();

        tbl_Transaction tran = new tbl_Transaction();
        tran.EMI_Id = entities.tbl_EMI.Max(i => i.EMI_Id);
        tran.Product_Name = prod.Product_Name;
        tran.Transaction_Date = DateTime.Today;
        tran.Transaction_Amount = emi.Total_Amount_Paid;
        tran.cardId = cardId;
        entities.tbl_Transaction.Add(tran);
        entities.SaveChanges();

        proc_updateCardAmountProductPurchase_Result result = entities.proc_updateCardAmountProductPurchase(cardId, prod.Product_Id, emi.emiPerMonth).FirstOrDefault();
        transaction.Commit();
        return Request.CreateResponse(HttpStatusCode.Created, tran);
      }
      catch(Exception)
      {
        transaction.Rollback();
        return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "transaction failed");
      }
            
        }

    [HttpGet]
    public HttpResponseMessage Get(int id)//custId
    {
      int cardId = entities.tbl_Card.Where(c => c.Customer_Id == id).FirstOrDefault().Card_Id;
      List<tbl_EMI> emiList=entities.tbl_EMI.Where(e=>e.Card_Id==cardId).ToList();
      if (emiList.Count != 0)
      {
        return Request.CreateResponse(HttpStatusCode.OK, emiList);
      }
      else
      {
        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "emi does not exist..");
      }

    }
  }
}
