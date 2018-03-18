import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RegisterRestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterRestProvider {

  baseUrl: any;

  constructor(public http: HttpClient) {
    console.log('Hello RegisterRestProvider Provider');

      // this.baseUrl =  'http://julius.collegeassignment.net';
      this.baseUrl =  'http://dev.com/personal/web/workout/public';
  }

  registerUser(userData){
      return new Promise((resolve, reject) => {
          this.http.post(this.baseUrl+'/api/register', JSON.stringify(userData))
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
                  console.error('error',err);
              });
      });
  }


}
