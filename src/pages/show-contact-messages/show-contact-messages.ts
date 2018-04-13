import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LoadPrivateContactMessagesProvider} from "../../providers/load-private-contact-messages/load-private-contact-messages";
import {FormBuilder} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";
import {SendMessageProvider} from "../../providers/send-message/send-message";

/**
 * Generated class for the ShowContactMessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-contact-messages',
  templateUrl: 'show-contact-messages.html',
})
export class ShowContactMessagesPage {

  messages : any;
    chatForm:any;

    sender_id:any;
    receiver_id:any;
    message:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadPrivateContactMessages: LoadPrivateContactMessagesProvider,
              public formBuilder: FormBuilder,
              public sendMessageProvider:SendMessageProvider,
              public toast:ToastController) {
      let user = JSON.parse(localStorage.getItem('user'));

      this.sender_id = user.id;
      this.receiver_id = this.navParams.get('user_id');

      this.chatForm = formBuilder.group({
          sender_id: [this.sender_id],
          receiver_id:[this.receiver_id],
          message:['']
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowContactMessagesPage');
      let user_id =(this.navParams.get('user_id'));

       this.loadPrivateContactMessages.loadUserMessages(user_id).then(data=>{

         this.messages = data['messages'];

        })

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


    sendChatMessage()
    {
        let data = {
            sender_id:this.sender_id,
            receiver_id:this.receiver_id,
            message:this.chatForm.value['message']
        };


        this.sendMessageProvider.sendMessage(data).then(data=>{

            this.presentToast(data['message']);



            if(data['status'] === 'ERROR')
            {
                return;
            }


            localStorage.setItem('user',JSON.stringify(data['data']));
            this.navCtrl.setRoot(TabsPage);
        });
    }

}
