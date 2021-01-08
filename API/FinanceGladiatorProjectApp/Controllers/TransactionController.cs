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
    dbproject_NEWEntities1 entities = new dbproject_NEWEntities1(); 
    [HttpPost]
    public HttpResponseMessage Post(int id,string prodName,decimal amt)
    {
      System.Data.Entity.DbContextTransaction transaction = entities.Database.BeginTransaction();
      tbl_Transaction tran = new tbl_Transaction();
      //try
      //{
        tbl_Product prod = entities.tbl_Product.Where(p => p.Product_Name == prodName).FirstOrDefault();
        tran.EMI_Id = id;
        tran.Product_Name = prod.Product_Name;
        tran.Transaction_Date= DateTime.Today;
        tran.Transaction_Amount = amt;
        entities.tbl_Transaction.Add(tran);
        entities.SaveChanges();
        transaction.Commit();
        return Request.CreateResponse(HttpStatusCode.Created, tran);
      //}
      //catch (Exception)
      //{
      //  transaction.Rollback();
      //  return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "transaction failed");
      //}
    }
        
         
  }
}
