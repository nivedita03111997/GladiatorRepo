//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
  using System.Runtime.Serialization;

  [DataContract]
    public partial class tbl_Transaction
    {
    [DataMember]
        public int Transaction_Id { get; set; }
    [DataMember]
    public Nullable<int> EMI_Id { get; set; }
    [DataMember]
    public string Product_Name { get; set; }
    [DataMember]
    public Nullable<System.DateTime> Transaction_Date { get; set; }
    [DataMember]
    public Nullable<decimal> Transaction_Amount { get; set; }
    [DataMember]
    public Nullable<int> cardId { get; set; }
    public virtual tbl_Card tbl_Card { get; set; }
        public virtual tbl_EMI tbl_EMI { get; set; }
    }
}
