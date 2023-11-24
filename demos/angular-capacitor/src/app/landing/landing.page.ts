import { Component } from '@angular/core';
import { AuthService } from 'ionic-appauth';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  events$ = this.auth.events$;

  constructor(
    private auth: AuthService,
  ) { }

  public signIn() {
    this.auth.signIn();
  }
}
