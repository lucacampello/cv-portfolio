import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {

  @Input() logo: string;
  @Input() isWideLogo: boolean = false;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  constructor() { 
    this.logo = '';
    this.title = '';
    this.subtitle = '';
    this.description = '';
  }

  ngOnInit(): void {
  }

}
