import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import { ToastController } from 'ionic-angular';
/*import {HomePage} from "../home/home";*/
import {TabsPage} from "../tabs/tabs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginRestProvider} from "../../providers/login-rest/login-rest";
import {Storage} from "@ionic/storage";


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
  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public toastCtrl: ToastController,public formBuilder: FormBuilder,
              public loginProvider: LoginRestProvider,
              public storage: Storage) {

    this.user = [];

      this.loginForm = formBuilder.group({
        username: [''],
        password: [''],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    submitUserLoginForm(){

      this.loginUser(this.loginForm.value);

    }

    loginUser(data){


      this.loginProvider.loginUser(data).then(data=>{

          this.presentToast(data['message']);

          if(data['status'] === 'ERROR')
            {
              return;
            }

            this.storage.set('user',data['data']);

          console.info(this.storage.get('user'));

            this.navCtrl.setRoot(TabsPage);
      });

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


    goToRegisterUser(){
    //load forgot register page
        this.navCtrl.push(RegisterPage);
    }

}
