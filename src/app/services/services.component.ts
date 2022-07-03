import { Component, Input, OnInit } from '@angular/core';
import * as contextData from 'src/app/json-data/context.json'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  messages = contextData;
  arrayForMobile: any = []

  @Input() security: any;
  @Input() housekeeping: any;
  @Input() manpower: any;

  data: any
  constructor() { }

  ngOnInit(): void {
    console.log("Security", this.security)
    if (this.security) {
      this.data = this.security
      console.log("Security data", this.data)
    } else if (this.housekeeping) {
      this.data = this.housekeeping
    } else {
      this.data = this.manpower
    }

    this.data.card_deatils1.forEach((ele: any) => {
      this.arrayForMobile.push(ele)
    });

    this.data.card_deatils2.forEach((ele: any) => {
      this.arrayForMobile.push(ele)
    });
  }
}