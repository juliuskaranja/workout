import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DeleteAccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeleteAccountProvider {

  baseUrl:any;
  constructor(public http: HttpClient) {
    console.log('Hello DeleteAccountProvider Provider');

      this.baseUrl =  'http://julius.collegeassignment.net';
      // this.baseUrl =  'http://dev.com/personal/web/workout/public';

  }

    deleteAccount(data){
        return new Promise((resolve, reject) => {
            this.http.post(this.baseUrl+'/api/deleteAccount', JSON.stringify(data))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                    console.error('error',err);
                });
        });

    }

}
