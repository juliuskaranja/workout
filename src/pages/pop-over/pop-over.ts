import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {FormBuilder} from "@angular/forms";
import {SettingPage} from "../setting/setting";
import {PrivateMessagePage} from "../private-message/private-message";
import {ProfileRestProvider} from "../../providers/profile-rest/profile-rest";
import {PersonalProfilePage} from "../personal-profile/personal-profile";
import {LoginPage} from "../login/login";

/**
 * Generated class for the PopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html',
})
export class PopOverPage {

    user_id: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public personalProfile:ProfileRestProvider) {
      let user = (JSON.parse(localStorage.getItem('user')));

    this.user_id = user['id'];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverPage');
  }

    viewPersonalProfile(user_id)
    {
      this.personalProfile.loadProfile({'user_id':user_id}).then(data=>{
        this.navCtrl.push(PersonalProfilePage,{'user':data['data']})
      })
    }

    OpenProfilePage()
    {

    this.navCtrl.push(ProfilePage);

    }

    openPrivateMessage()
    {
      this.navCtrl.push(PrivateMessagePage);
    }

    OpenSettingsPage()
    {
      this.navCtrl.push(SettingPage);
    }

    logout()
    {
      localStorage.removeItem('user');

      this.navCtrl.setRoot(LoginPage);
    }

}
