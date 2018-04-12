import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder} from "@angular/forms";
import {AddPostRestProvider} from "../../providers/add-post-rest/add-post-rest";
import {TabsPage} from "../tabs/tabs";
import {GeocodingServiceProvider} from '../../providers/geocoding-service/geocoding-service';


/**
 * Generated class for the AddNewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-post',
  templateUrl: 'add-new-post.html',
})
export class AddNewPostPage {

    image: any;
    addPostForm: any;

  constructor(public navCtrl: NavController,
              public addPostRest: AddPostRestProvider,
              public toastCntr: ToastController,
              public formBuilder: FormBuilder,
              private geo: GeocodingServiceProvider,
              public navParams: NavParams/*,
              public imagePicker: ImagePicker*/) {


      let user = (JSON.parse(localStorage.getItem('user')));
      let userId = user.id;

      /*
      this.geo.getCurrentLocation().subscribe(loc => {
          console.log(JSON.stringify(loc));
          this.lat = loc.latitude;
          this.lng = loc.longitude;
          this.loadMap().then(map => {
              this.map = map;
              this.addMarker();
          });
          this.geo.geocode(loc.address).subscribe(pos => {
              // console.log(JSON.stringify(pos.address));
          });
      });
*/
      this.addPostForm = formBuilder.group({
          location_name: ['kasarani'],
          description: [''],
          user_id: [userId],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPostPage');
  }
    /*selectAPicture(){
      let options = {'maximumImagesCount':1};
        this.imagePicker.getPictures(options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                 this.image = results[i];
                console.log('Image URI: ' + results[i]);
            }
        }, (err) => { });

    }
*/
    presentToast(message) {
        let toast = this.toastCntr.create({
            message: message,
            duration: 3000,
            position: 'middle'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }


    addPost(){
        this.addPostRest.PushNewPost(this.addPostForm.value);
        this.presentToast('successfully posted.');
        this.navCtrl.setRoot(TabsPage);

    }

}
