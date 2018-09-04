import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-confirm-deliveration',
  templateUrl: './confirm-deliveration.component.html',
  styleUrls: ['./confirm-deliveration.component.css']
})
export class ConfirmDeliverationComponent implements OnInit {

  invoicePage : any;
  orderPage : any;
  id : any;
  newBalance : any;
  oldBalance : any;
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
        data => { this.newBalance = data; },
        err => { console.log(err); } )

    if (this.orderPage.delivered == false ) {
      alert("waiting for buyer confirmation");
    }

  }



}
