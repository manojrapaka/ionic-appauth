import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuardService], loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingPageModule) },
  { path: 'signout-success', loadChildren: () => import('./auth/signout-success/signout-success.module').then(m => m.SignoutSuccessPageModule) },
  { path: 'callback', loadChildren: () => import('./auth/auth-callback/auth-callback.module').then(m => m.AuthCallbackPageModule) },
  { path: 'logout', loadChildren: () => import('./auth/end-session/end-session.module').then(m => m.EndSessionPageModule) },
  { path: 'endsession', loadChildren: () => import('./auth/end-session/end-session.module').then(m => m.EndSessionPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
