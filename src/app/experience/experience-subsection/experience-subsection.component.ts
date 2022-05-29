import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experience-subsection',
  templateUrl: './experience-subsection.component.html',
  styleUrls: ['./experience-subsection.component.scss']
})
export class ExperienceSubsectionComponent implements OnInit {

  @Input() title: string;
  constructor() {
    this.title = '';
  }

  ngOnInit(): void {
  }

  workExperience = ['Euris'];
  education = ['UniCz', 'UniPdLnC', 'UniPdCs', 'HighSchool'];
  // certifications = [];

}
