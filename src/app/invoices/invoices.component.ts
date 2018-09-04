import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoicePage : any;
  orderPage : any;
  constructor(private http : HttpClient, private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {

    this.http.get("http://localhost:8090/invoice/getAllInvoices")
      .pipe(map( resp => resp ))
      .subscribe(
        data => { this.invoicePage = data; },
        err => { console.log(err); } )

    this.http.get("http://localhost:8090/invoice/getAllInvoices")
      .pipe(map( resp => resp ))
      .subscribe(
        data => { this.invoicePage = data; },
        err => { console.log(err); } )

  }

}
