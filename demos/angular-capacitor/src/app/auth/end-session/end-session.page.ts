import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ionic-appauth';

@Component({
  template: '<p>Signing Out...</p>'
})
export class EndSessionPage implements OnInit {

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.auth.endSessionCallback();
  }

}
