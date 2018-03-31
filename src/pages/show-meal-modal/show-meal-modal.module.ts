import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowMealModalPage } from './show-meal-modal';

@NgModule({
  declarations: [
    ShowMealModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowMealModalPage),
  ],
})
export class ShowMealModalPageModule {}
