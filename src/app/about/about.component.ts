import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {resolve} from 'url';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pageAbout : any;
  balance: any;
  constructor(private http : HttpClient) { }

  ngOnInit() {

    this.http.get("http://localhost:8090/getContract")
      .pipe(map(resp => resp))
      .subscribe(
        data => {
          this.pageAbout = data;
        },
        err => {
          console.log(err);
        })


    this.http.get("http://localhost:8090/contract/getMyBalance")
      .pipe(map(resp => resp))
      .subscribe(
        data => {
          this.balance = data;
        },
        err => {
          console.log(err);
        })

  }
}

