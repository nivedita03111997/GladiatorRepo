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
    public class ProductController : ApiController
    {
        dbproject_NEWEntities entities = new dbproject_NEWEntities();

        public IEnumerable<tbl_Product> GetProducts()
        {
            return (entities.tbl_Product);
        }

        [HttpGet]
        public HttpResponseMessage Get(int id)//cardId
        {
      try
      {
        tbl_Product prod = entities.tbl_Product.Where(p => p.Product_Id == id).FirstOrDefault();
        if (prod != null)
        {
          return Request.CreateResponse(HttpStatusCode.OK, prod);
        }
        else
        {
          return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Prouct does not exist..");
        }
      }
      catch (Exception)
      {
        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Could not load");
      }

        }
    }
}
