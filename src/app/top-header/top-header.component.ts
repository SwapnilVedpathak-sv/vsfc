import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  @ViewChild("vsfcNavbar") vsfcNavbar!: ElementRef

  isCollapsed = false;
  width250: Boolean = false
  width0: any
  constructor() { }

  ngOnInit(): void { }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  openNav() {
    this.width250 = !this.width250
    console.log("this.width250", this.width250)
  }
}
