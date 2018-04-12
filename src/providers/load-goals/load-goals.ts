import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoadGoalsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadGoalsProvider {

  baseUrl:any;

  constructor(public http: HttpClient) {
    console.log('Hello LoadGoalsProvider Provider');

      // this.baseUrl =  'http://julius.collegeassignment.net';
      this.baseUrl =  'http://dev.com/personal/web/workout/public';


  }


  loadPersonalGoals(user_id)
  {
      return new Promise((resolve, reject) => {
          this.http.post(this.baseUrl+'/api/load-user-goals', JSON.stringify({'user_id':user_id}))
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
                  console.error('error',err);
              });
      });
  }
}
