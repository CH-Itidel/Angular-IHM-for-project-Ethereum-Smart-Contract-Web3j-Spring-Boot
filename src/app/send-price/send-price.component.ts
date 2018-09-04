import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-send-price',
  templateUrl: './send-price.component.html',
  styleUrls: ['./send-price.component.css']
})
export class SendPriceComponent implements OnInit {

  orderPage : any;
  id : any;
  constructor(private http : HttpClient, private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {

    this.id=this._Activatedroute.snapshot.params['id'];
    this.http.get("http://localhost:8090/order/sendPrice/"+this.id)
      .pipe(map( resp => resp ))
      .subscribe(
        data => { this.orderPage = data; },
        err => { console.log(err); } )

  }
}
