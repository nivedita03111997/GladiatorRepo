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
  public class TransactionController : ApiController
    {
    dbproject_NEWEntities entities = new dbproject_NEWEntities();
    [HttpPost]
    public HttpResponseMessage Post(int id, string prodName, decimal amt)
    {
      System.Data.Entity.DbContextTransaction transaction = entities.Database.BeginTransaction();
      tbl_Transaction tran = new tbl_Transaction();
      //try
      //{
      tbl_Product prod = entities.tbl_Product.Where(p => p.Product_Name == prodName).FirstOrDefault();
      int cardId = (int)entities.tbl_EMI.Where(e => e.EMI_Id == id).FirstOrDefault().Card_Id;
      tran.EMI_Id = id;
      tran.Product_Name = prod.Product_Name;
      tran.Transaction_Date = DateTime.Today;
      tran.Transaction_Amount = amt;
      tran.cardId = cardId;
      entities.tbl_Transaction.Add(tran);
      entities.SaveChanges();
      transaction.Commit();
      proc_updateCardAmountEmiPayment_Result result = entities.proc_updateCardAmountEmiPayment(cardId, amt).FirstOrDefault();
      return Request.CreateResponse(HttpStatusCode.Created, tran);
      //}
      //catch (Exception)
      //{
      //  transaction.Rollback();
      //  return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "transaction failed");
      //}
    }

    [HttpGet]
    public HttpResponseMessage Get(int id)//custId
    {
      int cardId = entities.tbl_Card.Where(c => c.Customer_Id == id).FirstOrDefault().Card_Id;
      List<tbl_Transaction> tranList = entities.tbl_Transaction.Where(t=>t.cardId== cardId).ToList();
      if (tranList.Count != 0)
      {
        return Request.CreateResponse(HttpStatusCode.OK, tranList);
      }
      else
      {
        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "emi does not exist..");
      }

    }

  }
}
