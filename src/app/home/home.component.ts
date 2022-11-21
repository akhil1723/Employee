import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user=""
phone=""
add=""
  constructor() { 
    if(localStorage.getItem('name')){
      this.user = JSON.parse(localStorage.getItem('name') || '')
      this.phone = JSON.parse(localStorage.getItem('phone') || '')
      this.add = JSON.parse(localStorage.getItem('address') || '')
     
      }
  }

  ngOnInit(): void {
  }

}

