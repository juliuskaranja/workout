import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {FormBuilder} from "@angular/forms";
import {SettingPage} from "../setting/setting";
import {PrivateMessagePage} from "../private-message/private-message";

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


  constructor(public navCtrl: NavController,
              public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverPage');
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

}
