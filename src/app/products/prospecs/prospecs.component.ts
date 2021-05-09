import { Component, OnInit } from '@angular/core';
import * as _ from 'node_modules/lodash';

@Component({
  selector: 'app-prospecs',
  templateUrl: './prospecs.component.html'
})
export class ProspecsComponent implements OnInit {

  constructor() { }
  public Product = {
    tabImg: '',
    tabDspl: '',
    productRate: '100 Rs/-',
    imgId: '',
    tabsRepeat: ''
  };
  ngOnInit(): void {

    let getCats = localStorage.getItem('CatItems');
    console.log(JSON.parse(getCats));
    let parseGetcats = JSON.parse(getCats);
    this.Product = {
      tabImg: parseGetcats.imgUrl,
      tabDspl: parseGetcats.imgDisp,
      productRate: '100 Rs/-',
      imgId: parseGetcats.imgId,
      tabsRepeat: parseGetcats.tabRepeat
    }
  }

}
