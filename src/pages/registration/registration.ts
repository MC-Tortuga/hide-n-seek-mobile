import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LandingPage } from '../landing/landing';

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
 

    constructor(public navCtrl: NavController, public http: Http) {}

    registration() {
        this.http
          .post("http://localhost:3000/registration", {
            firstname:this.firstname ,
            lastname: this.lastname ,
            username:this.username,
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
              this.navCtrl.push(LandingPage,t)
            },
    
            err => {
              console.log(err);
            }
          );
      }

    navigateToLanding() {
        console.log("Navigating...")
        this.navCtrl.push(LandingPage)
    }

}


