import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SignoutSuccessPage } from './signout-success.page';


const routes: Routes = [
  {
    path: '',
    component: SignoutSuccessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignoutSuccessPage]
})
export class SignoutSuccessPageModule {}
