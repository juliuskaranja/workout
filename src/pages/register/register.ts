import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterRestProvider} from "../../providers/register-rest/register-rest";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

    registerForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBldr:FormBuilder, public toastCtrl: ToastController,
              public registerProvider: RegisterRestProvider) {
    this.registerForm = this.formBldr.group({
        first_name: [''],
        surname: [''],
        dob: [''],
        gender: [''],
        email: [''],
        password: [''],
        password_confirmation: [''],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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

    registerUser(){

        let password = this.registerForm.value['password'];
        let confirmPassword = this.registerForm.value['password_confirmation'];

        if(password !== confirmPassword)
        {
          this.presentToast('Password do not match!');
          return;
        }

        this.registerProvider.registerUser(this.registerForm.value).then(data=>{
            console.info(data);
            this.presentToast(data['message']);
            if(data['status'] === 'ERROR')
            {
                return;
            }
            this.navCtrl.setRoot(LoginPage);
        });
    }
    goToLoginUser(){
      this.navCtrl.setRoot(LoginPage);
    }

}
