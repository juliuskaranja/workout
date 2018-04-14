import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html',
})
export class GoalPage {

  goals:any;
  target:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.goals = this.navParams.get('goals');
    this.target = this.navParams.get('target');

    console.info(this.goals);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalPage');
  }


}
