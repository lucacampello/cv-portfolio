import { Component, Input, OnInit } from '@angular/core';

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

}
