import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showtabs',
  templateUrl: './showtabs.component.html',
  styleUrls: ['./showtabs.component.css']
})
export class ShowtabsComponent implements OnInit {


  public showTabImg = [
    {
      tabImg: 'mob.jpg',
      tabDspl : 'Mobile'
    },
    {
      tabImg: 'oppo.jpg',
      tabDspl : 'Oppo'

    },
    {
      tabImg: 'samsung.jpg',
      tabDspl : 'Samsung'

    },
    {
      tabImg: 'sam1.jpg',
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
