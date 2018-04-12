import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoadPrivateContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadPrivateContactProvider {

  baseUrl: any;
  constructor(public http: HttpClient) {
    console.log('Hello LoadPrivateContactProvider Provider');

      this.baseUrl =  'http://julius.collegeassignment.net';
      // this.baseUrl =  'http://dev.com/personal/web/workout/public';
  }

  loadPrivateContacts()
  {

      return new Promise(resolve => {


          this.http.get(this.baseUrl+'/api/list-contacts').subscribe(data => {
              resolve(data);
          }, err => {
              console.log(err);
          });
      });
  }

}
