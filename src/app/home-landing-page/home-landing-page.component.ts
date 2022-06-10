import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-landing-page',
  templateUrl: './home-landing-page.component.html',
  styleUrls: ['./home-landing-page.component.scss']
})
export class HomeLandingPageComponent implements OnInit {
  isCollapsed = false;

  constructor() { }

  ngOnInit(): void { }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
