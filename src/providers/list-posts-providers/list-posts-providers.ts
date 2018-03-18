import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListPostsProvidersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListPostsProvidersProvider {

  baseUrl: any;

  constructor(public http: HttpClient) {
    console.log('Hello ListPostsProvidersProvider Provider');

      // this.baseUrl =  'http://julius.collegeassignment.net';
      this.baseUrl =  'http://dev.com/personal/web/workout/public';
  }

  loadPosts(){
      return new Promise(resolve => {
          this.http.get(this.baseUrl+'/api/list-posts?user_id=1').subscribe(data => {
              resolve(data);
          }, err => {
              console.log(err);
          });
      });
  }

}
