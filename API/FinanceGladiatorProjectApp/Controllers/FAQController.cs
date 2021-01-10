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
  public class FAQController : ApiController
  {
    dbproject_NEWEntities entities = new dbproject_NEWEntities();
    public IQueryable<tbl_FAQ> GetFAQs()
    {
      return entities.tbl_FAQ;
    }
  }
}
