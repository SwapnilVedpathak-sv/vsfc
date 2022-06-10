import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-landing-page',
  templateUrl: './service-landing-page.component.html',
  styleUrls: ['./service-landing-page.component.scss']
})
export class ServiceLandingPageComponent implements OnInit {

  isCollapsed = false;

  constructor() { }

  ngOnInit(): void { }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
