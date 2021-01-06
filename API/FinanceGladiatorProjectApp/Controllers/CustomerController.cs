﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using FinanceGladiatorProjectApp.Models;

namespace FinanceGladiatorProjectApp.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CustomerController : ApiController
    {
        dbproject_NEWEntities1 entities = new dbproject_NEWEntities1();

        public IQueryable<tbl_Customer> GetCustomers()
        {
            return (entities.tbl_Customer);
        }


        [Route("api/customer/Login")]
        [HttpPost]
        public HttpResponseMessage CustomerLogin(tbl_Customer customer)
        {
            //DbContextTransaction transaction = entities.Database.BeginTransaction();
            proc_LoginCheck_Result rslt = null;
            try
            {
                rslt = entities.proc_LoginCheck(customer.Username, customer.Passwords).FirstOrDefault();
            }
            catch (Exception)
            {
                //transaction.Rollback();
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Invalid login");
            }
            return Request.CreateResponse(HttpStatusCode.OK, rslt);

        }

        [Route("api/customer/Register")]
        [HttpPost]
        public HttpResponseMessage Register(tbl_Customer customer)
        {
            DbContextTransaction transaction = entities.Database.BeginTransaction();
            try
            {
                entities.tbl_Customer.Add(customer);
                entities.SaveChanges();
                transaction.Commit();
            }
            catch (Exception)
            {
                transaction.Rollback();
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Could not register customer");
            }
            return Request.CreateResponse(HttpStatusCode.Created, customer);

        }
    }
}
