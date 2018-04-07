import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UpdateUserProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpdateUserProfileProvider {

  baseUrl:any;

  constructor(public http: HttpClient) {
    console.log('Hello UpdateUserProfileProvider Provider');

      this.baseUrl =  'http://julius.collegeassignment.net';
      // this.baseUrl =  'http://dev.com/personal/web/workout/public';

  }

  updateProfile(data){
      return new Promise((resolve, reject) => {
          this.http.post(this.baseUrl+'/api/update-userProfile', JSON.stringify(data))
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
                  console.error('error',err);
              });
      });
  }
}
