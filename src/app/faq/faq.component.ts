import { Component, OnInit } from '@angular/core';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq:any;
  id:number=0;
  constructor(private faqService:FaqService) {
    this.faqService.getAllFAQ().subscribe(faqs=>{
      this.faq=faqs;
    })
   }

  ngOnInit(): void {
  }

}