import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from '../profile/profile.module';

const routes: Routes = [
  { path: '', component: MainpageComponent }
]

@NgModule({
  declarations: [MainpageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProfileModule
  ]
})
export class MainpageModule { }
