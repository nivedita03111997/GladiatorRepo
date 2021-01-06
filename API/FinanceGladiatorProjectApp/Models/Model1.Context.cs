﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FinanceGladiatorProjectApp.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class dbproject_NEWEntities1 : DbContext
    {
        public dbproject_NEWEntities1()
            : base("name=dbproject_NEWEntities1")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<tbl_Admin> tbl_Admin { get; set; }
        public virtual DbSet<tbl_Card> tbl_Card { get; set; }
        public virtual DbSet<tbl_Customer> tbl_Customer { get; set; }
        public virtual DbSet<tbl_EMI> tbl_EMI { get; set; }
        public virtual DbSet<tbl_FAQ> tbl_FAQ { get; set; }
        public virtual DbSet<tbl_Product> tbl_Product { get; set; }
        public virtual DbSet<tbl_Transaction> tbl_Transaction { get; set; }
    
        public virtual ObjectResult<proc_AdminLoginCheck_Result> proc_AdminLoginCheck(string un, string pass)
        {
            var unParameter = un != null ?
                new ObjectParameter("un", un) :
                new ObjectParameter("un", typeof(string));
    
            var passParameter = pass != null ?
                new ObjectParameter("pass", pass) :
                new ObjectParameter("pass", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_AdminLoginCheck_Result>("proc_AdminLoginCheck", unParameter, passParameter);
        }
    
        public virtual ObjectResult<proc_LoginCheck_Result> proc_LoginCheck(string un, string pass)
        {
            var unParameter = un != null ?
                new ObjectParameter("un", un) :
                new ObjectParameter("un", typeof(string));
    
            var passParameter = pass != null ?
                new ObjectParameter("pass", pass) :
                new ObjectParameter("pass", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<proc_LoginCheck_Result>("proc_LoginCheck", unParameter, passParameter);
        }
    }
}
