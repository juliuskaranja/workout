import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProfileRestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileRestProvider {

  baseUrl: any;

  constructor(public http: HttpClient) {

      this.baseUrl =  'http://julius.collegeassignment.net';
      // this.baseUrl =  'http://dev.com/personal/web/workout/public';

    console.log('Hello ProfileRestProvider Provider');
  }
    loadProfile(data)
    {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseUrl+'/api/user', JSON.stringify(data))
                .subscribe(res => {
                    resolve(res);
                    console.info('success',res);
                }, (err) => {
                    reject(err);
                    console.error('error',err);
                });
        });
    }

}
