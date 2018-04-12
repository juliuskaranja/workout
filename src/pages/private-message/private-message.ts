import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoadPrivateContactProvider} from "../../providers/load-private-contact/load-private-contact";
import {LoadPrivateContactMessagesProvider} from "../../providers/load-private-contact-messages/load-private-contact-messages";
import {ShowContactMessagesPage} from "../show-contact-messages/show-contact-messages";

/**
 * Generated class for the PrivateMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-private-message',
  templateUrl: 'private-message.html',
})
export class PrivateMessagePage {

  persons:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadContactProvider: LoadPrivateContactProvider,
              public loadPrivateContactMessages: LoadPrivateContactMessagesProvider) {
    this.loadContacts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateMessagePage');

  }

  loadContacts(){


      this.loadContactProvider.loadPrivateContacts().then(data=>{
          this.persons = data['users']
      });
  }

    loadUserMessage(user_id){
      this.navCtrl.push(ShowContactMessagesPage,{'user_id':user_id});

    }

}
