import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {

  invoicePage : any;
  orderPage : any;
  id : any;
  deliveryPage : any;
  balance : any;
  constructor(private http : HttpClient, private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {

    this.id=this._Activatedroute.snapshot.params['id'];
    this.http.get("http://localhost:8090/invoice/"+this.id)
      .pipe(map( resp => resp ))
      .subscribe(
        data => { this.invoicePage = data; },
        err => { console.log(err); } )

    this.id=this._Activatedroute.snapshot.params['id'];

    this.http.get("http://localhost:8090/order/findOrder/"+this.id)
      .pipe(map( resp => resp ))
      .subscribe(
        data => { this.orderPage = data; },
        err => { console.log(err); } );

    this.http.get("http://localhost:8090/contract/getMyBalance")
      .pipe(map( resp => resp ))
      .subscribe(
        data => { this.balance = data; },
        err => { console.log(err); } );

  }

  delivery() {
    alert("delivery confirmed")
    this.http.get("http://localhost:8090/order/delivery/"+this.id)
      .pipe(map( resp => resp ))
      .subscribe(
        data => { this.deliveryPage = data; },
        err => { console.log(err); } );

  }

}
