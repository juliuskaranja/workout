import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";
import {UpdatePasswordProvider} from "../../providers/update-password/update-password";

/**
 * Generated class for the UpdatePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-password',
  templateUrl: 'update-password.html',
})
export class UpdatePasswordPage {

    passwordForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder,
              public updatePasswordProvider: UpdatePasswordProvider,
              public toast: ToastController) {

      let user = (JSON.parse(localStorage.getItem('user')));



      this.passwordForm = formBuilder.group({
          currentPassword: [''],
          newPassword: [''],
          confirmPassword: [''],
          user_id: [user.id],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePasswordPage');
  }

    UpdatePassword()
    {
      this.updateUserPassword(this.passwordForm.value);
    }

    presentToast(message) {
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

    updateUserPassword(data)
    {
        this.updatePasswordProvider.updatePassword(data).then(data=>{

            this.presentToast(data['message']);

            if (data['status'] === 'OK')
            {
                this.navCtrl.setRoot(TabsPage);
            }

            return;
        });

    }

}
