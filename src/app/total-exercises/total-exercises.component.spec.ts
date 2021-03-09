import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalExercisesComponent } from './total-exercises.component';

describe('TotalExercisesComponent', () => {
  let component: TotalExercisesComponent;
  let fixture: ComponentFixture<TotalExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
