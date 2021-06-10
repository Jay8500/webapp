import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MongodserviceService {


  public stringUrl = "http://localhost:3000/jay/"
  constructor(private _http: HttpClient) { }

  public fetchGetData() {
    return this._http.get(this.stringUrl + "countrycodes");
  }

  public insertUsersData(person) {
    var PostData = JSON.stringify(person);
    var headers = new HttpHeaders({
      'content-Type': 'application/json; charset=utf-8',
      'Devloper': 'Jaya Krishna.'
    });
    const body = JSON.stringify(person)
    return this._http.post(this.stringUrl + "userspost", body, { headers: headers });
  }

}
