import { Component, OnInit } from '@angular/core';
import * as contextData from 'src/app/json-data/context.json'

@Component({
  selector: 'app-housekeeping-landing-page',
  templateUrl: './housekeeping-landing-page.component.html',
  styleUrls: ['./housekeeping-landing-page.component.scss']
})
export class HousekeepingLandingPageComponent implements OnInit {
  messages = contextData;

  constructor() { }

  ngOnInit(): void {
  }

}
