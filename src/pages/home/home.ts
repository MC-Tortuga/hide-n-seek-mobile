import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  navigateToRegistration() {
    console.log("Navigating...");
    this.navCtrl.push(RegistrationPage);
  }
  navigateToLogin() {
    console.log("Navigating...");

    this.navCtrl.push(LoginPage)
  }
}
  