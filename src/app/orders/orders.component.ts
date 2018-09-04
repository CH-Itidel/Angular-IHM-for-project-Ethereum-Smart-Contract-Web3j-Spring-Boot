import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  pageOrders : any;
  constructor(private http : HttpClient) { }

  ngOnInit() {

    this.http.get("http://localhost:8090/order")
      .pipe(map( resp => resp ))
      .subscribe(
                  data => { this.pageOrders = data; },
                  err => { console.log(err); } )

  }


}
