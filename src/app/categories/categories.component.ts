import { Component, OnInit } from '@angular/core';
import * as contextData from 'src/app/json-data/context.json'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  messages = contextData;
  constructor() { }

  ngOnInit(): void {
    console.log("messages", this.messages)
  }

}
