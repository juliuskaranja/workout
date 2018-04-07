import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ProfileRestProvider} from "../../providers/profile-rest/profile-rest";
import {TabsPage} from "../tabs/tabs";
import {FormBuilder} from "@angular/forms";
import {UpdateUserProfileProvider} from "../../providers/update-user-profile/update-user-profile";
import {HomePage} from "../home/home";

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

    profileForm:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder:FormBuilder,
              public updateProfile:UpdateUserProfileProvider,
              public profileProvider: ProfileRestProvider,
              public toast: ToastController) {
    this.loadProfile({'user_id':1});


      let user = (JSON.parse(localStorage.getItem('user')));

      this.profileForm = formBuilder.group({
          user_id: [user.id],
          username: [user.username],
          first_name: [user.first_name],
          surname: [user.surname],
          email: [user.email],
          dob: [user.dob],
      });

  }

    submitUserProfileForm(){

        let data = (this.profileForm.value);

        this.updateProfile.updateProfile(data);

        this.presentToast('Successfully update profile');

        this.navCtrl.setRoot(TabsPage);

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
