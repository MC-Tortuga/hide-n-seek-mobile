import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { HomePage } from '../home/home';

@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html'
})
export class RegistrationPage {
    public firstname: string;
    public lastname: string;
    public username: string;
    public email: string;
    public password: string;
    public confirmpassword: string;
    public complexObject: any;
    public flag: boolean = true;

    constructor(public navCtrl: NavController, public http: Http) {}

    registration() {
        this.http
          .post("http://localhost:3000/login", {
            email: this.email,
            password: this.password
          })
          .subscribe(
            result => {
              console.log(result);
    
              var jwtResponse = result.json();
              var token = jwtResponse.token;
    
              localStorage.setItem("TOKEN", token);
    
              let t = localStorage.getItem("TOKEN");
            },
    
            err => {
              console.log(err);
            }
          );
      }

    navigateToHome() {
        console.log("Navigating...")
        this.navCtrl.push("HomePage")
    }

}


