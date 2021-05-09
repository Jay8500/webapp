import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-showtabs',
  templateUrl: './showtabs.component.html',
  styleUrls: ['./showtabs.component.css']
})
export class ShowtabsComponent implements OnInit {


  public showTabImg = [

    {
      tabImg: 'img1.jpg',
      tabDspl: 'Vivo',
      tabImgid: 1,
      tabRepeat: 'mobiles'
    },
    {
      tabImg: 'img2.jpg',
      tabDspl: 'Vivo',
      tabImgid: 2,
      tabRepeat: 'mobiles'

    },
    {
      tabImg: 'img3.jpg',
      tabDspl: 'Vivo',
      tabImgid: 3,
      tabRepeat: 'mobiles'

    },
    {
      tabImg: 'img4.jpg',
      tabDspl: 'Vivo',
      tabImgid: 4,
      tabRepeat: 'mobiles'

    },
    {
      tabImg: 'img5.jpg',
      tabDspl: 'Vivo',
      tabImgid: 5,
      tabRepeat: 'mobiles'

    },
    {
      tabImg: 'img6.jpg',
      tabDspl: 'Vivo',
      tabImgid: 6,
      tabRepeat: 'mobiles'

    },
    {
      tabImg: 'img7.jpg',
      tabDspl: 'Vivo'
      , tabImgid: 7,
      tabRepeat: 'mobiles'

    },
    {
      tabImg: 'img7.jpg',
      tabDspl: 'Vivo',
      tabImgid: 8,
      tabRepeat: 'mobiles'
    }
  ];
  public chargerTabImg = [
    {
      tabImg: 'charger1.jpg',
      tabDspl: 'Chargers',
      chrgImg: 1,
      tabRepeat: 'charges'

    },
    {
      tabImg: 'charger2.jpeg',
      tabDspl: 'Ultimate Charges',
      chrgImg: 2,
      tabRepeat: 'charges'
    },
    {
      tabImg: 'charger3.jpeg',
      tabDspl: 'Alexa Charges',
      chrgImg: 3,
      tabRepeat: 'charges'
    },
    {
      tabImg: 'charger4.jpeg',
      tabDspl: 'Z-45 Charges',
      chrgImg: 4,
      tabRepeat: 'charges'
    },
    {
      tabImg: 'charger4.jpeg',
      tabDspl: 'Z-45 Charges',
      chrgImg: 5,
      tabRepeat: 'charges'
    },
    {
      tabImg: 'charger4.jpeg',
      tabDspl: 'Z-45 Charges',
      chrgImg: 6,
      tabRepeat: 'charges'
    },
    {
      tabImg: 'charger4.jpeg',
      tabDspl: 'Z-45 Charges',
      chrgImg: 7,
      tabRepeat: 'charges'
    },
    {
      tabImg: 'charger4.jpeg',
      tabDspl: 'Z-45 Charges',
      chrgImg: 8,
      tabRepeat: 'charges'
    }
  ];

  public televisionTabImg = [
    {
      tabImg: 'tele1.jpg',
      tabDspl: 'Samsung',
      tabImgId: 1,
      tabRepeat: 'television'
    },
    {
      tabImg: 'tele2.jpg',
      tabDspl: 'Samsung QLED',
      tabImgId: 2,
      tabRepeat: 'television'

    },
    {
      tabImg: 'tele3.jpg',
      tabDspl: 'TCL',
      tabImgId: 3,
      tabRepeat: 'television'

    },
    {
      tabImg: 'tele4.jpg',
      tabDspl: 'MI',
      tabImgId: 4,
      tabRepeat: 'television'
    },
    {
      tabImg: 'tele5.jpg',
      tabDspl: 'LED',
      tabImgId: 5,
      tabRepeat: 'television'
    },
    {
      tabImg: 'tele6.jpg',
      tabDspl: 'Samsung',
      tabImgId: 6,
      tabRepeat: 'television'
    },
    {
      tabImg: 'tele7.jpg',
      tabDspl: 'TCL',
      tabImgId: 7,
      tabRepeat: 'television'
    },
    {
      tabImg: 'tele8.jpg',
      tabDspl: 'Samsung',
      tabImgId: 8,
      tabRepeat: 'television'
    }


  ];
  constructor(private _rou: Router) { }

  ngOnInit(): void {
    this.mobiles = true;
  }

  public mobiles = false;
  public chargers = false;
  public televisions = false;
  tabs(ctrl) {
    switch (ctrl) {
      case "Mobiles":
        this.mobiles = true;
        this.chargers = false;
        this.televisions = false;
        break;
      case "Chargers":
        this.chargers = true;
        this.mobiles = false;
        this.televisions = false;
        break;
      case "televisions":
        this.televisions = true;
        this.mobiles = false;
        this.chargers = false;
        break;
    }
  }

  explores(cats, catIndx) {
    console.log('cats', cats);
    console.log(catIndx + 1);
    let storeObject = {
      imgUrl: cats[catIndx].tabImg,
      imgId: catIndx,
      imgDisp: cats[catIndx].tabDspl,
      tabRepeat: cats[catIndx].tabRepeat
    }
    // let storeObje = [];
    // storeObje.push(storeObject);
    let storeCats = localStorage.setItem('CatItems', JSON.stringify(storeObject));
    this._rou.navigateByUrl('product-specifications')
  }
  // explores() {
  //   alert('dgfd')
  //   this._rou.navigate(['product-specifications'])
  // }
}
