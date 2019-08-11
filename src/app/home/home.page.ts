import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  subscription: any;
  constructor(
    private navCtrl: NavController,
    private platform: Platform
  ) {}

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }


  logout() {
    
    firebase.auth().signOut().then(() => {
      this.navCtrl.navigateRoot('/signup');
    }).catch((err) => {
      console.log(err);
    });

  }


}
