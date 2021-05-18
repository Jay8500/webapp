import { Component, OnInit } from '@angular/core';
import * as _ from 'node_modules/lodash';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public erorClasses = "";
  public erorClassess = "";
  public loginRequires = {
    isUser: '',
    isPasswd: ''
  }
  public logErrorMsg = {
    isUserReq: '',
    isPwdReq: ''
  }

  constructor(private _router: Router) { }

  onError(ctrl) {
    switch (ctrl) {
      case "isUser":
        if (this.loginRequires.isUser == "" ||
          this.loginRequires.isUser == undefined ||
          this.loginRequires.isUser == null
        ) {
          this.erorClasses = "#dc3545";
          this.logErrorMsg.isUserReq = 'Login Name is Required'
        } else {
          this.erorClasses = '#FBFCFC';
          this.logErrorMsg.isUserReq = "";
        }
        break;
      case "isPasswd":
        if (this.loginRequires.isPasswd == "" ||
          this.loginRequires.isPasswd == undefined ||
          this.loginRequires.isPasswd == null
        ) {
          this.erorClassess = "#dc3545";
          this.logErrorMsg.isPwdReq = 'Login Password is Required';
        } else {
          this.erorClassess = '#FBFCFC';
          this.logErrorMsg.isPwdReq = "";
        }
        break;
    }
  }

  ngOnInit() {

    this.erorClasses = '#FBFCFC';
    this.erorClassess = '#FBFCFC';
  }

  //storing form data.
  ifLogin() {

    let LogSubErr = ['isUser', 'isPasswd'];
    _.forEach(LogSubErr, (logERR, logIndx) => {
      this.onError(logERR);
    });

    let LogStores = [];
    let loginObj = JSON.parse(JSON.stringify(this.loginRequires));
    this.ifLoginClear();
    console.log('loginObj', loginObj);
    LogStores.push(loginObj);
    console.log('LOGSTORES', LogStores);
    this._router.navigateByUrl('home')
  }

  // clearing form.
  ifLoginClear() {
    this.loginRequires = {
      isUser: '',
      isPasswd: ''
    }
  }

  ifSignup() {
    this._router.navigateByUrl('sign-up');
  }

}
