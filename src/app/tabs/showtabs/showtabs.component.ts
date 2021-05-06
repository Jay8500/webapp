import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showtabs',
  templateUrl: './showtabs.component.html',
  styleUrls: ['./showtabs.component.css']
})
export class ShowtabsComponent implements OnInit {


  public showTabImg = [
   
    {
      tabImg: 'img1.jpg',
      tabDspl : 'Vivo'
    },
    {
      tabImg: 'img2.jpg',
      tabDspl : 'Vivo'
    },
    {
      tabImg: 'img3.jpg',
      tabDspl : 'Vivo'
    },
    {
      tabImg: 'img4.jpg',
      tabDspl : 'Vivo'
    },
    {
      tabImg: 'img5.jpg',
      tabDspl : 'Vivo'
    },
    {
      tabImg: 'img6.jpg',
      tabDspl : 'Vivo'
    },
    {
      tabImg: 'img7.jpg',
      tabDspl : 'Vivo'
    }
    
  ];
  public chargerTabImg = [
    {
      tabImg: 'charger1.jpg',
      tabDspl : 'Chargers'
    },
    {
      tabImg: 'charger2.jpeg',
      tabDspl : 'Ultimate Charges'
    },
    {
      tabImg: 'charger3.jpeg',
      tabDspl : 'Alexa Charges'
    },
    {
      tabImg: 'charger4.jpeg',
      tabDspl : 'Z-45 Charges'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.mobiles = true;
  }

  public mobiles = false;
  public chargers = false;
  tabs(ctrl) {
    switch (ctrl) {
      case "Mobiles":
        this.mobiles = true;
        this.chargers = false;
        break;
      case "Chargers":
        this.chargers = true;
        this.mobiles = false;
        break;
    }
  }
}
