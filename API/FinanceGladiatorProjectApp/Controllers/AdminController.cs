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
    public class AdminController : ApiController
    {
        dbproject_NEWEntities1 entities = new dbproject_NEWEntities1();
        [Route("api/admin/Login")]
        [HttpPost]
        public HttpResponseMessage AdminLogin(tbl_Admin admin)
        {
            proc_AdminLoginCheck_Result rslt = entities.proc_AdminLoginCheck(admin.Username, admin.Password).FirstOrDefault();
            if (rslt != null)
                return Request.CreateResponse(HttpStatusCode.OK, rslt);
            else
                return Request.CreateErrorResponse(HttpStatusCode.Found, "Invalid Login");

        }

        [Route("api/admin/Register")]
        [HttpPost]
        public HttpResponseMessage RegisterAdmin(tbl_Admin admin)
        {
            DbContextTransaction transaction = entities.Database.BeginTransaction();
            try
            {
                entities.tbl_Admin.Add(admin);
                entities.SaveChanges();
                transaction.Commit();
            }
            catch (Exception)
            {
                transaction.Rollback();
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Could not register admin");
            }
            return Request.CreateResponse(HttpStatusCode.Created, admin);

        }
    }
}