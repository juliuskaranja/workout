import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoadPrivateContactMessagesProvider} from "../../providers/load-private-contact-messages/load-private-contact-messages";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadPrivateContactMessages: LoadPrivateContactMessagesProvider) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowContactMessagesPage');
      let user_id =(this.navParams.get('user_id'));

       this.loadPrivateContactMessages.loadUserMessages(user_id).then(data=>{

         this.messages = data['messages'];

        })

  }

}
