import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthConfigService {
  private authConfig;

  constructor(
    private http: HttpClient,
    private navController: NavController) { }

  async loadAuthConfig() {
    // if (Capacitor.isNativePlatform()) {
    //   const apiHost = localStorage.getItem('apiHost');
    //   if (apiHost) {
    //     environment.apiUrl = localStorage.getItem('apiHost');
    //   } else {
    //     this.navController.navigateRoot('server-config');
    //     return;
    //   }
    // }

    try {
      const data = await this.http.get(`${environment.apiUrl}/api/auth-info`).toPromise();

      this.authConfig = data;
      if (this.authConfig.issuer.endsWith('/')) {
        this.authConfig.issuer = this.authConfig.issuer.substring(0, this.authConfig.issuer.length - 1);
      }

      // Override issuer with values from API.
      environment.auth_config.server_host = this.authConfig.issuer;
      environment.auth_config.client_id = this.authConfig.clientId;
    } catch (error) {
      console.error('Failed to fetch remote OIDC configuration.');
      console.error(error);
    }
  }

  getConfig() {
    return this.authConfig;
  }
}
