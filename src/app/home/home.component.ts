import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cars = [
    {
      wa: 'Hello',
      c: [
        { imgs: 'img1.jpg' }
      ]
    },
    {
      wa: 'Hello',
      c: [
        { imgs: 'img2.jpg' }
      ]
    },
    {
      wa: 'Hello',
      c: [
        { imgs: 'img3.jpg' }
      ]
    },
    {
      wa: 'Hello',
      c: [
        { imgs: 'img5.jpg' }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
