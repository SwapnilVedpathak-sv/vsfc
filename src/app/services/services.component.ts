import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input() security: any;
  @Input() housekeeping: any;
  @Input() manpower: any;

  data: any
  constructor() { }

  ngOnInit(): void {
    console.log("Security", this.security)
    if (this.security) {
      this.data = this.security
    } else if (this.housekeeping) {
      this.data = this.housekeeping
    } else {
      this.data = this.manpower
    }
  }

}
