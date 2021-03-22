import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responsiveOptions;
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
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 2
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
  }

}
