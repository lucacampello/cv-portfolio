import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { enter, leave } from './animations/skillsAnimation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition(':enter', [
        useAnimation(enter)
      ]),
      transition(':leave', [
        useAnimation(leave)
      ])
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
      this.slides.push(this.slides.shift()!);
      this.currentSlide = next === this.slides.length ? 0 : next;
      this.Repeat();
    }, 2000);
  }

  slides = [
    { src: "./assets/angular.svg", title: "Angular"},
    { src: "./assets/NodeJS.svg", title: "NodeJS"},
    { src: "./assets/Typescript.svg", title: "Typescript"},
    { src: "./assets/Jasmine.svg", title: "Jasmine"},
    { src: "./assets/Karma.svg", title: "Karma"},
    { src: "./assets/Git.svg", title: "Git"}
  ]
}
