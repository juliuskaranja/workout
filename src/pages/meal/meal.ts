import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {ShowMealModalPage} from "../show-meal-modal/show-meal-modal";

/**
 * Generated class for the MealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html',
})
export class MealPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealPage');
  }
    showBreakFastMeal()
    {
      let data = {'during':'Break Fast','meal':'Tea, boiled eggs and Bread'};
      this.showModal(data);
    }
    showLunchMeal()
    {
      let data = {'during':'Lunch','meal':'Rice and chicken'};
      this.showModal(data);
    }
    showSupperMeal()
    {
      let data = {'during':'Supper','meal':'Fish '};
      this.showModal(data);
    }


    showModal(data){

      let modal = this.modal.create(ShowMealModalPage);
      modal.present(data)

    }
}
