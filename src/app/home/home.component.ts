import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responsiveOptions;
  public coverPagesPhotos = [
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

    this.coverPagesPhotos = [
      {
        cP: [
          {
            imgs: 'oppo.jpg',
            imgMs: 'mobiles'
          }
        ]
      },
      {
        cP: [
          {
            imgs: 'newtele.jpg',
            imgMs: 'mobiles'
          },
        ]
      },
      {
        cP: [
          {
            imgs: 'vivo.jpg',
            imgMs: 'mobiles'
          }
        ]
      },
      // {
      //   cP : [
      //     {
      //       imgs : 'girlsward.jpg',
      //       imgMs : 'girls'
      //     }
      //   ]
      // }
    ]


  }

}
