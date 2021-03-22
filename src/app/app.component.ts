import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nope Post';
  public Abouts = false;
  public Contacts = false;
  public Explores = false;
  public onHeart = false;
  public offHeart = false;
  public onnToggle = false;
  public offToggle = false;
  public onCom = false;
  public offCom = false;
  constructor(private _routes: Router) { }
  ngOnInit() {
    this.onnToggle = true;
    this.onHeart = true;
    this.onCom = true;
    // this.onSatisfactory()
  }

  footerRouting(ftrCntrl) {
    switch (ftrCntrl) {
      case "About":
        this.Abouts = true;
        this.Contacts = false;
        this.Explores = false;
        break;
      case "Contact":
        this.Contacts = true;
        this.Abouts = false;
        this.Explores = false;
        break;
      case "Explore":
        this.Explores = true;
        this.Contacts = false;
        this.Abouts = false;
        break;
    }
  }

  onToggle(ctrl) {
    switch (ctrl) {
      case "on":
        this.onnToggle = false;
        this.offToggle = true;

        break;
      case "off":
        this.onnToggle = true;
        this.offToggle = false;
        break;
      case "heartOn":
        this.onHeart = false;
        this.offHeart = true;
        break;
      case "heartOff":
        this.onHeart = true;
        this.offHeart = false;
        break;
      case "onComment":
        this.onCom = false;
        this.offCom = true;

        break;
      case "offComment":
        this.onCom = true;
        this.offCom = false;
        break;
    }
  }
  onCartClick() {
    this._routes.navigateByUrl('carts');
  }

  public popOverTitle = `Wanna Fuck`;
  public showSatisFactory = false;
  onSatisfactory() {
    this.showSatisFactory = true;
  }
  justLogin() {
    this._routes.navigateByUrl('login');
    this.showSatisFactory = false;
  }
}