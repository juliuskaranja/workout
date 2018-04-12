import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoadPrivateContactMessagesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadPrivateContactMessagesProvider {

  baseUrl:any;

  constructor(public http: HttpClient) {

    console.log('Hello LoadPrivateContactMessagesProvider Provider');

      this.baseUrl =  'http://julius.collegeassignment.net';
      // this.baseUrl =  'http://dev.com/personal/web/workout/public';

  }

    loadUserMessages(user_id){
        return new Promise(resolve => {
            let user = (JSON.parse(localStorage.getItem('user')));

            let userId = user.id;

            this.http.get(this.baseUrl+'/api/list-contact-messages?user_id='+userId+'&person_id='+user_id).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }
}
