import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

    apiUrl: any;

  constructor(public http: HttpClient) {

      this.apiUrl = 'https://jsonplaceholder.typicode.com';


    console.log('Hello RestProvider Provider');
  }
    getUsers() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'/users').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    addUser(data) {
      console.info(data);

        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl+'/users', JSON.stringify(data))
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
