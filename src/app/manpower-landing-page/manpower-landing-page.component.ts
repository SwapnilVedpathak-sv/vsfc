import { Component, OnInit } from '@angular/core';
import * as contextData from 'src/app/json-data/context.json'

@Component({
  selector: 'app-manpower-landing-page',
  templateUrl: './manpower-landing-page.component.html',
  styleUrls: ['./manpower-landing-page.component.scss']
})
export class ManpowerLandingPageComponent implements OnInit {
  messages = contextData;

  constructor() { }

  ngOnInit(): void {
  }

}
