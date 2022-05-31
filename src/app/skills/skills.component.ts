import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeIn, fadeOut } from './animations/skillsAnimation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [ useAnimation(fadeIn, {params: {time: '1500ms'}}) ]),
      transition('* => void', [ useAnimation(fadeOut, {params: {time: '1500ms'}}) ])
    ])
  ]
})
export class SkillsComponent implements OnInit {

  currentSlide: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.Repeat();
  }

  Repeat() {
    setTimeout(() => {
      const next = this.currentSlide + 1;
      this.currentSlide = next === this.slides.length ? 0 : next;
      this.Repeat();
    }, 2000);
  }

  slides = [
    { src: "../../../assets/Businessman.png"},
    { src: "../../../assets/EurisLogo.png"},
    { src: "../../../assets/HighSchoolLogo.png"},
    { src: "../../../assets/UniPDLogo.png"},
    { src: "../../../assets/UniCZLogo.png"}
  ]
}
