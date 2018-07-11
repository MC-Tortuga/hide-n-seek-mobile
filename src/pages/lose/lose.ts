import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-lose',
  templateUrl: 'lose.html'
})
export class LosePage {

  posts: any;

  constructor(public navCtrl: NavController, public http: Http) {}
}