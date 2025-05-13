import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFourComponent } from './project-four.component';

describe('ProjectFourComponent', () => {
  let component: ProjectFourComponent;
  let fixture: ComponentFixture<ProjectFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
