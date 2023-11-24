import { Platform } from '@ionic/angular';
import { Requestor, StorageBackend } from '@openid/appauth';
import { APP_INITIALIZER, NgModule, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, Browser } from 'ionic-appauth';
import { CapacitorBrowser, CapacitorSecureStorage } from 'ionic-appauth/lib/capacitor';
import { authFactory } from './factories';
import { httpFactory } from './factories/http.factory';
import { HttpClient } from '@angular/common/http';
import { AuthConfigService } from './auth-config.service';

const authInitializer = (authConfig: AuthConfigService) => () => authConfig.loadAuthConfig();

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: StorageBackend, useClass: CapacitorSecureStorage },
    { provide: Requestor, useFactory: httpFactory, deps: [Platform, HttpClient] },
    { provide: Browser, useClass: CapacitorBrowser },
    { provide: AuthService, useFactory : authFactory, deps: [Platform, NgZone, Requestor, Browser, StorageBackend] },
    { provide: APP_INITIALIZER, useFactory: authInitializer, multi: true, deps: [AuthConfigService], },
  ]
})
export class CoreModule { }
