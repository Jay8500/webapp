import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as _ from 'node_modules/lodash';
import { MongodserviceService } from '../mongodservice.service';

import { HttpClient } from '@angular/common/http'
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [DatePipe]
})
export class SignupComponent implements OnInit {

  public teleOptList = [];
  public telePhonePlaceHolder = "Enter Your Mobile Number"
  public signUp = {
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailId: "",
    password: "",
    gender: "",
    userTeleCode: "(+91)",
    createDate: "",
    sessionBy: ""
  }

  constructor(private _rout: Router, private _http: HttpClient, private __mongoService: MongodserviceService,
    private _date: DatePipe) { }
  public tel: any;
  ngOnInit() {
    this.__mongoService.fetchGetData().subscribe((data: any[]) => {
      this.tel = data;
      _.forEach(data, (code, codeIn) => {
        this.teleOptList.push({ label: `${code.CountryName}  ${code.CountryCode} `, value: code.CountryCode });
        this.telePhonePlaceHolder = (this.signUp.userTeleCode == "(+91)" ? '85-00-913198' : 'Enter Your Mobile Number')
      });
    });


    // this.changeLang('te', 'hello')
  }

  // async changeLang(tel, text) {
  //   let transText = text;

  //   await this._http.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURI(text)}`)
  //     .toPromise()
  //     .then((res) => {
  //       transText = res[0][0][0];
  //     })
  //   // return transText;
  //   console.log("r", transText)
  // }

  ifSlctChngePlcHolder(event, ustTelCode) {
    let isFiltrdPlcHldr = _.filter(this.tel, { CountryCode: ustTelCode })
    this.telePhonePlaceHolder = isFiltrdPlcHldr[0].PlaceHolder;
  }
  ifSignup() {

    this._rout.navigateByUrl('login');
  }
  ifLogin() {
    delete this.signUp.userTeleCode;
    let saveUsrData = this.signUp
    console.log("    sac", saveUsrData);
    saveUsrData.createDate = this._date.transform(new Date(), 'yyyy-MM-dd')
    saveUsrData.sessionBy = this._date.transform(new Date(), 'yyyy-MM-dd')

    // return;
    this.__mongoService.insertUsersData(saveUsrData).subscribe(data => console.log(data));
    this.onCancel();
    // this._rout.navigateByUrl('home');
  }

  onCancel() {
    this.signUp = {
      firstName: "",
      lastName: "",
      contactNumber: "",
      emailId: "",
      password: "",
      gender: "",
      userTeleCode: "(+91)",
      createDate: "",
      sessionBy: ""
    }
  }
}
