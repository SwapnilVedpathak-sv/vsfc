import { Component, OnInit } from '@angular/core';
import * as contextData from 'src/app/json-data/context.json'

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {
  messages = contextData;

  constructor() { }

  ngOnInit(): void { }
}