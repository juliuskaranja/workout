import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowContactMessagesPage } from './show-contact-messages';

@NgModule({
  declarations: [
    ShowContactMessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowContactMessagesPage),
  ],
})
export class ShowContactMessagesPageModule {}
