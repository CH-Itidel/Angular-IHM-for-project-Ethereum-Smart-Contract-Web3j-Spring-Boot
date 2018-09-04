import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  orderPage : any;
  id : any;
  invoiceSent : Boolean;
  priceSent : Boolean;

  constructor(private http : HttpClient, private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {

    this.id=this._Activatedroute.snapshot.params['id'];

    this.http.get("http://localhost:8090/order/findOrder/"+this.id)
      .pipe(map( resp => resp ))
      .subscribe(
        data => { this.orderPage = data; },
        err => { console.log(err); } );

  }

}
