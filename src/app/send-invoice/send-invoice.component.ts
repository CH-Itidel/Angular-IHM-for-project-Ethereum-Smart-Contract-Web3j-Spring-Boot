import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {InvoiceForm} from './invoice-form';

@Component({
  selector: 'app-send-invoice',
  templateUrl: './send-invoice.component.html',
  styleUrls: ['./send-invoice.component.css']
})
export class SendInvoiceComponent implements OnInit {

  invoiceSent : any;
  orderPage : any;
  id : any;
  invoiceNo : any;
  invoice = new InvoiceForm(0, "");
  submitted1 = false;


  constructor(private http : HttpClient, private _Activatedroute:ActivatedRoute, private formBuilder: FormBuilder) {
  }



  ngOnInit() {

   /* this.http.get("http://localhost:8090/invoice/sendInvoice")
      .pipe(map( resp => resp ))
      .subscribe(
        data => { this.orderPage = data; },
        err => { console.log(err); } )*/



    this.id=this._Activatedroute.snapshot.params['id'];
    this.invoice.orderNumber = this.id;
    this.http.get("http://localhost:8090/order/findOrder/"+this.id)
      .pipe(map( resp => resp ))
      .subscribe(
        data => { this.orderPage = data; },
        err => { console.log(err); } );

    this.invoiceNo = this.orderPage.invoiceNumber + 1;
  }




  sendInvoice() {

    alert("invoice sent")
    this.submitted1 = true;
    this.http.post("http://localhost:8090/invoice/sendInvoice",this.invoice)
      .pipe(map( resp => resp ))
      .subscribe(
        data => { this.invoiceSent = data; },
        err => { console.log(err); } );
    this.invoiceNo = this.invoiceSent.invoiceNumber;
  }

  get diagnostic() { return JSON.stringify(this.invoice); }


}
