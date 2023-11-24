import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'ionic-appauth';

@Component({
  template: '<p>Signing in...</p>'
})
export class AuthCallbackPage implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.authorizationCallback(window.location.origin + this.router.url);
    console.log('LOGGING AUTH CALLBACK PAGE', window.location.origin + this.router.url);
  }

}
