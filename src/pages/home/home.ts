import { Component } from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';
import {PopOverPage} from "../pop-over/pop-over";
import 'rxjs/add/operator/map';
import {RestProvider} from "../../providers/rest/rest";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // providers:
})
export class HomePage {


    posts: any;
    users: any;
    user:any;

  constructor(public navCtrl: NavController,
              public popCntr: PopoverController,
              public restProvider: RestProvider,
              public storage: Storage) {

      // this.getUsers();
      // this.saveUser();
      this.getUserProfile();
  }

    getUserProfile(){
      this.user = this.storage.get('user');
      console.info('this is closer => ',this.user);
    }

    getUsers() {
        this.restProvider.getUsers()
            .then(data => {
                this.users = data;
                console.log(this.users);
            });
    }
    /*saveUser(){
      this.restProvider.addUser({ name: 'Julius', username: 'Karanja',
          email: 'kimsonjulius1@gmail.com', phone: '+254712782887',
          website: 'codexartisan.com', address: { street: 'Kasarani', suite: '23',
              city: 'Nairobi', zipcode: '3434', geo: { lat: '2.4353', lng: '2.435234' } }
              , company: { name: 'Kimson', bs: 'Jupiter', catchPhrase: 'Phase 13' }})
    }*/

    showPopOverPage(myEvent)
    {
        let popover = this.popCntr.create(PopOverPage);
        popover.present({
            ev: myEvent
        });
    }

}
