import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AddPostRestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddPostRestProvider {

  baseUrl: any;
  constructor(public http: HttpClient) {
    console.log('Hello AddPostRestProvider Provider');

      this.baseUrl =  'http://julius.collegeassignment.net';
      // this.baseUrl =  'http://dev.com/personal/web/workout/public';
  }


    PushNewPost(userData) {
        return new Promise((resolve, reject) => {
            this.http.post(this.baseUrl + '/api/create-post', JSON.stringify(userData))
                .subscribe(res => {
                    resolve(res);

                }, (err) => {
                    reject(err);
                    console.error('error', err);
                });
        });
    }
}
