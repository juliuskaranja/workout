import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {ShowMealModalPage} from "../show-meal-modal/show-meal-modal";
import {LoadMealPlanProvider} from "../../providers/load-meal-plan/load-meal-plan";

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

    mealPlan:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modal: ModalController, public listMeal: LoadMealPlanProvider) {
    /*this.loadMeal();*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealPage');
  }

    loadMeal(mealType)
    {
      this.listMeal.loadMealPlan(mealType).then(data=>{
        this.mealPlan = data;

          //let data = {'during':'Break Fast','meal':'Tea, boiled eggs and Bread'};
          this.showModal(this.mealPlan,mealType);
      });

    }
    showBreakFastMeal()
    {
      this.loadMeal('breakfast');

    }
    showLunchMeal()
    {
        this.loadMeal('lunch');

    }
    showSupperMeal()
    {
        this.loadMeal('supper');
    }


    showModal(data,mealType){

      let myData = {'data' : data, 'mealType' : mealType};
      let modal = this.modal.create(ShowMealModalPage,{'myData':myData});
      modal.present()

    }
}
