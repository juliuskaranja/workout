import { Component } from '@angular/core';
import {AlertController, NavController, PopoverController} from 'ionic-angular';
import {PopOverPage} from "../pop-over/pop-over";
import {LoadGoalsProvider} from "../../providers/load-goals/load-goals";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

    goals:any;
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public popCntr:PopoverController,
              public loadGoalsProv: LoadGoalsProvider) {

      this.loadGoals();

    this.goals = [
        {
          name:'Julius',
            id:2
        },
        {
          name:'Julius',
            id:2
        },
        {
          name:'Julius',
            id:2
        },
        {
          name:'Julius',
            id:2
        },
        {
          name:'Julius',
            id:2
        },
        {
          name:'Julius',
            id:2
        },
    ]
  }

    loadGoals()
    {
        let user = localStorage.getItem('user');

        this.loadGoalsProv.loadPersonalGoals(user['id']).then(data=>{
            console.info(data);
        });
    }

    openSideMenu(myEvent)
    {
        let popover = this.popCntr.create(PopOverPage);
        popover.present({
            ev: myEvent
        });
    }

    editWorkout(goalId)
    {
        let prompt = this.alertCtrl.create({
            title: 'Edit Work out Plan',
            // message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'workOut',
                    placeholder: 'Work Out',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    }
    


}
