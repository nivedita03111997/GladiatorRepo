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
        dbproject_NEWEntities2 entities = new dbproject_NEWEntities2();

        [HttpPost]
        public tbl_EMI Post(int cardId,int prodId,int tenurePeriod)
        {
            tbl_EMI emi = new tbl_EMI();
            emi.Tenure_period = tenurePeriod;
            tbl_Product prod = entities.tbl_Product.Where(p => p.Product_Id == prodId).FirstOrDefault();
            emi.Product_cost = prod.Product_Cost;
            emi.Total_Amount_Paid = (prod.Product_Cost / tenurePeriod) + prod.Processing_fees;
            emi.Card_Id = cardId;
            emi.Product_Id = prodId;
            emi.EMI_Start_Date = DateTime.Today;
            emi.EMI_Due_Date = DateTime.Today.AddMonths(1);
            return emi;
            
        }
    }
}
