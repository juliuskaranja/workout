import { Component } from '@angular/core';
import {AlertController, NavController, PopoverController} from 'ionic-angular';
import {PopOverPage} from "../pop-over/pop-over";
import {LoadGoalsProvider} from "../../providers/load-goals/load-goals";
import {ShowGainMuscleGuideProvider} from "../../providers/show-gain-muscle-guide/show-gain-muscle-guide";
import {GoalPage} from "../goal/goal";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

    goals:any;
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public popCntr:PopoverController,
              public loadGoalsProv: LoadGoalsProvider,
              public gainMuscleProvider:ShowGainMuscleGuideProvider) {

      // this.loadGoals();
  }

    loadGoals()
    {
        let user = localStorage.getItem('user');

        this.loadGoalsProv.loadPersonalGoals(user['id']).then(data=>{
            console.info(data);
        });
    }

    showGainMuscle()
    {
        let user = JSON.parse(localStorage.getItem('user'));

        console.info(user);

        this.loadGoalsProv.loadGainMuscleGuide({user_id:user.id,target:'gain muscle'}).then(data=>{
            console.info(data);
            this.navCtrl.push(GoalPage,{goals:data['goals'],target:'Gain Muscle'})
        })

    }
    showLossWeight()
    {
        let user = JSON.parse(localStorage.getItem('user'));

        console.info(user);

        this.loadGoalsProv.loadGainMuscleGuide({user_id:user.id,target:'lose weight'}).then(data=>{
            console.info(data);
            this.navCtrl.push(GoalPage,{goals:data['goals'],target:'Lose Weight'})
        })

    }

    showStayFit()
    {
        let user = JSON.parse(localStorage.getItem('user'));

        console.info(user);

        this.loadGoalsProv.loadGainMuscleGuide({user_id:user.id,target:'stay fit'}).then(data=>{
            console.info(data);
            this.navCtrl.push(GoalPage,{goals:data['goals'],target:'Stay Fit'})
        })

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
