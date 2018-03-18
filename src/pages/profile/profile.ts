import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ProfileRestProvider} from "../../providers/profile-rest/profile-rest";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileData: any;

  first_name: any;
  surname: any;
  email: any;
  dob: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public profileProvider: ProfileRestProvider,
              public toast: ToastController) {
    this.loadProfile({'user_id':1});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

    loadProfile(data){

    this.profileProvider.loadProfile(data).then(data=>{
      console.info(data);

      this.presentToast(data['message']);

      if(data['status'] === 'ERROR')
      {
        this.navCtrl.setRoot(TabsPage);
      }

        this.profileData = data['data'];
        this.first_name = data['data']['first_name'];
        this.surname = data['data']['surname'];
        this.email = data['data']['email'];
        this.dob = data['data']['dob'];

    });

    }

    presentToast(message){

        let toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'middle'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();

    }
}
