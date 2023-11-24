import { Component } from '@angular/core';
import { AuthService } from 'ionic-appauth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  user$ = this.auth.user$;
  events$ = this.auth.events$;

  constructor(
    private auth: AuthService,
  ) { }

  public async signOut() {
    await this.auth.signOut();
  }

  public async getUserInfo(): Promise<void> {
    await this.auth.loadUserInfo();
  }

  public async refreshToken(): Promise<void> {
    await this.auth.refreshToken();
  }

}
