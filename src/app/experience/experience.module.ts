import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { ExperienceSubsectionComponent } from './experience-subsection/experience-subsection.component';
import { ExperienceItemComponent } from './experience-item/experience-item.component';



@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceSubsectionComponent,
    ExperienceItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
