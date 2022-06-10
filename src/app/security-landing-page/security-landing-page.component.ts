import { Component, OnInit } from '@angular/core';
import * as contextData from 'src/app/json-data/context.json'

@Component({
  selector: 'app-security-landing-page',
  templateUrl: './security-landing-page.component.html',
  styleUrls: ['./security-landing-page.component.scss']
})
export class SecurityLandingPageComponent implements OnInit {
  messages = contextData;

  constructor() { }

  ngOnInit(): void {
  }

}
