import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SendMessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SendMessageProvider {
    baseUrl:any;
  constructor(public http: HttpClient) {
    console.log('Hello SendMessageProvider Provider');


      this.baseUrl =  'http://julius.collegeassignment.net';
      // this.baseUrl =  'http://dev.com/personal/web/workout/public';

  }

    sendMessage(data)
    {

        return new Promise((resolve, reject) => {
            this.http.post(this.baseUrl+'/api/send-private-message', JSON.stringify(data))
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                    console.error('error',err);
                });
        });
    }
}
