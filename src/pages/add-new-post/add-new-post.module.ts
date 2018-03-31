import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewPostPage } from './add-new-post';

@NgModule({
  declarations: [
    AddNewPostPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewPostPage),
  ],
})
export class AddNewPostPageModule {}
