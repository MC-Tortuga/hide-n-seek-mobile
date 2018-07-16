/// <reference path="../../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
import { Component } from '@angular/core';
import { MarkerTypeId, IMapOptions } from 'angular-maps';



@Component({
  selector: 'app-bing-map',
  templateUrl: 'map.component.html'
})
export class MapComponent {

  latLng = {
    lat: 0,
    lng: 0
  };
  pins;

  _markerTypeId = MarkerTypeId

  _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1,
    zoom: 6

  };


  constructor() {
this.getUserLocation();
  }

  // for all available options for the various components, see IInfoWindowOptions, IInfoWindowAction, IMarkerOptions, IMapOptions, IMarkerIconInfo

  getUserLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.latLng.lat = position.coords.latitude;

      this.latLng.lng = position.coords.longitude;

    
      

    // map.setView()
  

    }

    );
  }
  _click() {
    console.log("hello world...");
  }
}

