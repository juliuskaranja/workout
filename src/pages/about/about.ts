import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';

import {GeocodingServiceProvider} from '../../providers/geocoding-service/geocoding-service';
import {PopOverPage} from "../pop-over/pop-over";


declare var GMaps;


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
    providers: [GeocodingServiceProvider]
})
export class AboutPage {

    map: any;
    lat: number;
    lng: number;

  constructor(public navCtrl: NavController, private geo: GeocodingServiceProvider,
              public popCntr:PopoverController) {

  }
  ionViewDidLoad(){
    console.info('Just loaded this page!');

  }

    ngAfterViewInit() {
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

    }
    loadMap() {
        return new Promise(resolve => {
            let map = new GMaps({
                div: '#map2',
                width: '400px',
                height: '400px',
                zoom: 5,
                lat: -13.043333,
                lng: -76.028333
                /*lat: this.lat,
                lng: this.lng*/
            });
            resolve(map);
        });
    }

    addMarker() {
        this.map.addMarker({
            lat: -13.043333,
            lng: -76.028333,
            title: 'Julius',
            infoWindow: {
                content: '<p>Julius is here</p>'
            }
        });

        this.map.addMarker({
            lat: -12.043333,
            lng: -77.028333,
            title: 'Peter',
            id: 'marker',
            infoWindow: {
                content: '<p>Peter is here</p>'
            }
        });

        this.map.addMarker({
            lat: -10.043333,
            lng: -75.028333,
            title: 'Risper',
            id: 'marker',
            infoWindow: {
                content: '<p>Risper is here</p>'
            }
        });

        this.map.addMarker({
            lat: -10.043333,
            lng: -78.028333,
            title: 'Mary',
            id: 'marker',
            infoWindow: {
                content: '<p>Mary is here</p>'
            }
        });
    }


    openSideMenu(myEvent)
    {
        let popover = this.popCntr.create(PopOverPage);
        popover.present({
            ev: myEvent
        });
    }

}
