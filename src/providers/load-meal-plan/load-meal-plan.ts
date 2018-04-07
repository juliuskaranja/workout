import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoadMealPlanProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadMealPlanProvider {

  baseUrl : any;

  constructor(public http: HttpClient) {
    console.log('Hello LoadMealPlanProvider Provider');

      this.baseUrl =  'http://julius.collegeassignment.net';
      // this.baseUrl =  'http://dev.com/personal/web/workout/public';
  }

    loadMealPlan(mealType){
        return new Promise(resolve => {
          var user = (JSON.parse(localStorage.getItem('user')));

          var userId = user.id;

            this.http.get(this.baseUrl+'/api/get-meal-plan?user_id='+userId+'&meal_time='+mealType).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

}
