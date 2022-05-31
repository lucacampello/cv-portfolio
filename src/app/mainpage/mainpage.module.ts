import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from '../profile/profile.module';
import { ExperienceModule } from '../experience/experience.module';
import { HeaderModule } from '../header/header.module';
import { SkillsModule } from '../skills/skills.module';
import { FooterModule } from '../footer/footer.module';

const routes: Routes = [
  { path: '', component: MainpageComponent }
]

@NgModule({
  declarations: [MainpageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProfileModule,
    ExperienceModule,
    HeaderModule,
    SkillsModule,
    FooterModule
  ]
})
export class MainpageModule { }
