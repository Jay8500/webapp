import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as _ from 'node_modules/lodash';
import {  HttpClient , HttpClientModule} from '@angular/common/http'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  public teleOptList = [];
  public telePhonePlaceHolder = "Enter Your Mobile Number"
  public signUp = {
    usrFirstName: '',
    usrLastName: '',
    usrMobileNum: '',
    usrEmailId: '',
    usrSignupPwd: null,
    usrGender: 'M',
    ustTelCode: "(+91)"
  }
  constructor(private _rout: Router, private _http: HttpClient) { }

  ngOnInit() {
    let teleCodes = [
      {
        Country: "Norway",
        Code: "(+47)",
        PlaceHolder: "122-22222"
      },
      {
        Country: "India",
        Code: "(+91)",
        PlaceHolder: "82-222-22222"

      },
      {
        Country: "Bangladesh",
        Code: "(+880)",
        PlaceHolder: "82-22222"

      }
    ];
    _.forEach(teleCodes, (code, codeIn) => {
      this.teleOptList.push({ label: `${code.Country}  ${code.Code} `, value: code.Code });
      this.telePhonePlaceHolder = (this.signUp.ustTelCode == "(+91)" ? '85-00-913198' : 'Enter Your Mobile Number')
    })
    // this.changeLang('te', 'hello')
  }

  async changeLang(tel, text) {
    let transText = text;

    await this._http.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURI(text)}`)
      .toPromise()
      .then((res) => {
        transText = res[0][0][0];
      })
    // return transText;
    console.log("r", transText)
  }

  ifSlctChngePlcHolder(event, ustTelCode) {
    let teleCodesPlcHlder = [
      {
        Country: "Norway",
        Code: "(+47)",
        PlaceHolder: "122-22222",
        recordStatus: 'A'
      },
      {
        Country: "India",
        Code: "(+91)",
        PlaceHolder: "82-222-22222",
        recordStatus: 'A'
      },
      {
        Country: "Bangladesh",
        Code: "(+880)",
        PlaceHolder: "82-22222",
        recordStatus: 'A'
      }
    ];
    let isFiltrdPlcHldr = _.filter(teleCodesPlcHlder, { Code: ustTelCode })
    this.telePhonePlaceHolder = isFiltrdPlcHldr[0].PlaceHolder;

  }
  ifSignup() {
    this._rout.navigateByUrl('login');
  }
  ifLogin() {
    this._rout.navigateByUrl('home');
  }
}
