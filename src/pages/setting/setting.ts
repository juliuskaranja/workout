import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {UpdatePasswordPage} from "../update-password/update-password";
import {DeleteAccountProvider} from "../../providers/delete-account/delete-account";
import {TabsPage} from "../tabs/tabs";
import {LoginPage} from "../login/login";

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController,
              public deleteAccountProvider: DeleteAccountProvider,
              public toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

    updatePasswordPage()
    {

      this.navCtrl.push(UpdatePasswordPage);
    }

    deleteUserAccount()
    {
      this.showAlert();
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

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Delete Account!',
            subTitle: 'Are you sure you want to delete your account?',
            buttons: [{
                text:'OK',
                handler:()=>
                {
                    let user = (JSON.parse(localStorage.getItem('user')));

                    this.deleteAccountProvider.deleteAccount({'user_id':user.id}).then(data=>{
                        this.presentToast(data['message']);

                        if(data['status'] === 'ERROR')
                        {
                            return;
                        }

                        this.navCtrl.setRoot(LoginPage);
                    });
                }
            },{
                text:'CANCEL',
                role:'cancel',
                handler:()=>{
                    console.info('cancel');
                }
            }]
        });
        alert.present();
    }

}
