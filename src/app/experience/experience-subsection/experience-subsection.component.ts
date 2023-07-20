import { Component, Input, OnInit, Output } from '@angular/core';
import { ExperienceItemModel } from '../models/experience-item.model';

@Component({
  selector: 'app-experience-subsection',
  templateUrl: './experience-subsection.component.html',
  styleUrls: ['./experience-subsection.component.scss'],
})
export class ExperienceSubsectionComponent implements OnInit {
  @Input() title: string;
  constructor() {
    this.title = '';
  }

  ngOnInit(): void {
    this.workExperience.push(this.myMetaExperience, this.eurisExperience);
    this.education.push(
      this.uniCzErasmus,
      this.uniPdSecondExperience,
      this.uniPdFirstExperience,
      this.highSchoolExperience
    );
  }

  workExperience: ExperienceItemModel[] = [];
  education: ExperienceItemModel[] = [];
  certifications = [];

  myMetaExperience: ExperienceItemModel = {
    logo: './assets/myMetaLogo.png',
    isWideLogo: true,
    title: 'myMeta',
    subtitle: '2023 - Present',
    description: `<b>R&D Web Developer</b> for the development of specific <b>micro-applications' prototypes</b> with the aim of bringing new features into the product.<br>Development of an <b>Angular application</b> supported by a <b>NodeJS backend</b> as a <b>chrome extension</b> that will enhance the UX of the web pages which is applied to.<br><b>Technologies</b> used: <b>OpenAI, NodeJS, Angular, Git</b>.`
  }

  eurisExperience: ExperienceItemModel = {
    logo: './assets/EurisLogo.png',
    isWideLogo: true,
    title: 'Euris SpA',
    subtitle: '2019 - 2023',
    description: `Front-End Web Developer for a leading customer in the steel industry from mid 2022 till 2023.<br><b>Development</b> of a FE application with <b>Agile methodology</b>, followed by <b>unit testing and peer code review</b>.<br><b>Technologies</b> used: <b>Angular supported by Kendo UI, Git</b>.<br><br>Back-End Web Developer for a leading customer in the insurance industry from 2020 to mid 2022. <b>Development</b> of a BFF (Backend For Frontend) to migrate previously existent business logic to a new backend.<br>In charge of the <b>technical analysis</b> for many of the new features introduced.<br>The <b>technologies</b> used mainly are <b>NodeJS, Typescript, Git</b>.<br><br>Front-End Web Developer for an important platform of banking services from 2019 until late 2020. <b>Development</b> of a number of front-end processes, together with <b>unit testing and documentation</b>.<br>Development of a private npm library to group common elements for the various applications requested.<br>The <b>technologies</b> mainly used have been <b>Angular, Typescript, HTML, CSS, SCSS, Karma and Jasmine, Git.</b>`,
  };

  uniCzErasmus: ExperienceItemModel = {
    logo: './assets/UniCZLogo.png',
    isWideLogo: true,
    title: 'Univerzita Karlova V Praze',
    subtitle: '2018',
    description: "Erasmus - Part of Bachelor's Degree",
  };

  uniPdSecondExperience: ExperienceItemModel = {
    logo: './assets/UniPDLogo.png',
    isWideLogo: true,
    title: 'Università degli Studi di Padova',
    subtitle: '2014 - 2018',
    description: "Bachelor's Degree - Linguistic and Cultural Mediation",
  };

  uniPdFirstExperience: ExperienceItemModel = {
    logo: './assets/UniPDLogo.png',
    isWideLogo: true,
    title: 'Università degli Studi di Padova',
    subtitle: '2013 - 2014',
    description: "Bachelor's Degree - Computer Science - Interrupted",
  };

  highSchoolExperience: ExperienceItemModel = {
    logo: './assets/HighSchoolLogo.png',
    isWideLogo: true,
    title: 'I.I.S.S. Sandro Pertini',
    subtitle: '2008 - 2013',
    description: 'High School Diploma - Accounting, Business and Programming',
  };
}
