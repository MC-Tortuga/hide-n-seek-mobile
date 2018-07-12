/// <reference path="../../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
import { Component, ViewChild } from '@angular/core';
import { MarkerTypeId, IMapOptions } from 'angular-maps';



@Component({
  selector: 'app-bing-map',
  templateUrl: 'map.component.html'
})
export class MapComponent {
  @ViewChild('map') map;

  latLng = {
    lat: 0,
    lng: 0
  };
  pins;
bingmap;

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

  ionViewDidAppear() {
    // this.bingmap = new Microsoft.Maps.Map(this.map, {
    //   disableBirdseye: false,
    //   disableStreetside: false,
    //   navigationBarMode: 1,
    //   zoom: 6

    // });
    // this.bingmap.setView({zoom:10})

    // Microsoft.Maps.loadModule('Microsoft.Maps.SpatialMath', function () {
    //   var center = this.bingmap.getCenter();
    //   var circle1 = this.createCircle(center, 1, 'rgba(0,0,150,0.5)');
    //   this.bingmap.entities.push(circle1);
    // });
    
  }
  
  createCircle(center, radius, color) {
    //Calculate the locations for a regular polygon that has 36 locations which will rssult in an approximate circle.
    var locs = Microsoft.Maps.SpatialMath.getRegularPolygon(center, radius, 36, Microsoft.Maps.SpatialMath.DistanceUnits.Miles);
    return new Microsoft.Maps.Polygon(locs, { fillColor: color, strokeThickness: 0 });
}
  // for all available options for the various components, see IInfoWindowOptions, IInfoWindowAction, IMarkerOptions, IMapOptions, IMarkerIconInfo

  getUserLocation() {
    
    navigator.geolocation.getCurrentPosition(position => {
      this.latLng.lat = position.coords.latitude;

      this.latLng.lng = position.coords.longitude;
    }
    );
    

  }
  _click() {
    console.log("hello world...");
  }
}

