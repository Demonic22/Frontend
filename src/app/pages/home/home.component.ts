import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hideSidebar: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.hideSidebar = !this.hideSidebar;
   }
}
