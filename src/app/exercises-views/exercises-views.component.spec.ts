import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesViewsComponent } from './exercises-views.component';

describe('ExercisesViewsComponent', () => {
  let component: ExercisesViewsComponent;
  let fixture: ComponentFixture<ExercisesViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
