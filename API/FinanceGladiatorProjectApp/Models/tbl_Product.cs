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
  public partial class tbl_Product
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tbl_Product()
        {
            this.tbl_EMI = new HashSet<tbl_EMI>();
        }

    [DataMember]
    public int Product_Id { get; set; }
    [DataMember]
    public string Product_Name { get; set; }
    [DataMember]
    public string Product_Image { get; set; }
    [DataMember]
    public string Product_Description { get; set; }
    [DataMember]
    public Nullable<int> Product_Cost { get; set; }
    [DataMember]
    public Nullable<decimal> Processing_fees { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_EMI> tbl_EMI { get; set; }
    }
}
