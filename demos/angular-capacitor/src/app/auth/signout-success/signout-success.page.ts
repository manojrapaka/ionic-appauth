import { Component } from '@angular/core';
import { AuthService } from 'ionic-appauth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signout-success',
  templateUrl: './signout-success.page.html',
  styleUrls: ['./signout-success.page.scss'],
})
export class SignoutSuccessPage {
  events$ = this.auth.events$;
  sub: Subscription;

  constructor(
    private auth: AuthService,
  ) { }

  public signIn() {
    this.auth.signIn();
  }
}
