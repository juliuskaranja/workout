import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// import { Http, Response } from '@angular/http';
// import { GoogleMapsLatLngBounds } from 'ionic-native';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';


/*
  Generated class for the GeocodingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeocodingServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GeocodingServiceProvider Provider');
  }
    geocode(address: string) {
        return this.http
            .get('http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address))
            /*.subscribe(data => {
                console.info(data);
            })*/

            .map(res => res)
            .map(result => {
                console.info(result);
                // if (result.status !== 'OK') { throw new Error('unable to geocode address'); }

                // var location = new Location();
                // location.address = result.results[0].formatted_address;
                // location.latitude = result.results[0].geometry.location.lat;
                // location.longitude = result.results[0].geometry.location.lng;

                // var viewPort = result.results[0].geometry.viewport;
                // location.viewBounds = new GoogleMapsLatLngBounds(new GoogleMapsLatLng(viewPort.southwest.lat, viewPort.southwest.lng),
                //     new GoogleMapsLatLng(viewPort.northeast.lat, viewPort.northeast.lng));
                return location;
            });
    }

    getCoordinateForCurrentLocation()
    {
        return this.http
            .get('http://ipv4.myexternalip.com/json')
            // .map(res => res.json().ip)
            .flatMap(ip => this.http.get('http://freegeoip.net/json/' /*+ ip*/))
            // .map((res: Response) => res.json())
            .map(result => {

                console.info(result);

                let location = new Location();
                console.log(JSON.stringify(result));
                // location.address = result.city + ', ' + result.region_code + ' ' + result.zip_code + ', ' + result.country_code;
                // location.latitude = result.latitude;
                // location.longitude = result.longitude;

                return location;
            });


        /*return this.http
            .get('http://ipv4.myexternalip.com/json')
            .flatMap(ip => this.http.get('http://freegeoip.net/json/' /!*+ ip*!/))
            .map(result => {
                console.info('this =>',result);
                return result;
            })*/

    }

    getCurrentLocation() {
        return this.http
            .get('http://ipv4.myexternalip.com/json')
            // .map(res => res.json().ip)
            .flatMap(ip => this.http.get('http://freegeoip.net/json/' /*+ ip*/))
            // .map((res: Response) => res.json())
            .map(result => {

                console.info(result);

                let location = new Location();
                console.log(JSON.stringify(result));
                // location.address = result.city + ', ' + result.region_code + ' ' + result.zip_code + ', ' + result.country_code;
                // location.latitude = result.latitude;
                // location.longitude = result.longitude;

                return result;
                // return location;
            });
    }

}

export class Location implements ILatLng {
    latitude: number;
    longitude: number;
    address: string;
    //viewBounds: GoogleMapsLatLngBounds;
}
export interface ILatLng {
    latitude: number;
    longitude: number;
}
