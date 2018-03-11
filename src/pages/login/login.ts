import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import { ToastController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

    this.user = [];
    // this.user.name = '';
    // this.user.username = '';
    // this.user.password = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


      presentToast(message) {
      let toast = this.toastCtrl.create({
          message: message,
          duration: 3000,
          position: 'middle'
      });

      toast.onDidDismiss(() => {
          console.log('Dismissed toast');
      });

      toast.present();
  }


    loginUser(user){

      console.info(user);
    //login the user.
        this.presentToast('Successfully logged in.');

        this.navCtrl.setRoot(TabsPage);


    }

    goToRegisterUser(){
    //load forgot register page
        this.navCtrl.push(RegisterPage);
    }

}
