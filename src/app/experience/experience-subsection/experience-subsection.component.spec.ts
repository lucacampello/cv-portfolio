import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSubsectionComponent } from './experience-subsection.component';

describe('ExperienceSubsectionComponent', () => {
  let component: ExperienceSubsectionComponent;
  let fixture: ComponentFixture<ExperienceSubsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceSubsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
