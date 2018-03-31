import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ImagePicker} from "@ionic-native/image-picker";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public imagePicker: ImagePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPostPage');
  }
    selectAPicture(){
      let options = {'maximumImagesCount':1};
        this.imagePicker.getPictures(options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                 this.image = results[i];
                console.log('Image URI: ' + results[i]);
            }
        }, (err) => { });

    }

    uploadPost(){
      //
    }

}
