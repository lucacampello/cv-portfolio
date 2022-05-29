import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { ExperienceSubsectionComponent } from './experience-subsection/experience-subsection.component';



@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceSubsectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
