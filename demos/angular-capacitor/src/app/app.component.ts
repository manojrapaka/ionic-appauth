import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

import { NavController, Platform } from '@ionic/angular';
import { AuthActions, AuthService, IAuthAction } from 'ionic-appauth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  sub: Subscription;

  constructor(
    private platform: Platform,
    private auth: AuthService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      await this.auth.init();
      this.sub = this.auth.events$.subscribe((action) => this.authActionHandler(action));

      SplashScreen.hide();
    });
  }

  private authActionHandler(action: IAuthAction) {
    console.log('LOGGING app compoent', action.action);
    if (action.action === AuthActions.SignOutSuccess) {
      console.log('LOGGING navigating to landing page')
      this.navCtrl.navigateRoot('signout-success');
    }

    if (action.action === AuthActions.SignInSuccess) {
      this.navCtrl.navigateRoot('home');
    }

    if (action.action === AuthActions.SignInFailed) {
      this.navCtrl.navigateRoot('landing');
    }
  }

}
