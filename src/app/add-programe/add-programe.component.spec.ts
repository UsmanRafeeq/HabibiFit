import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgrameComponent } from './add-programe.component';

describe('AddProgrameComponent', () => {
  let component: AddProgrameComponent;
  let fixture: ComponentFixture<AddProgrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProgrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProgrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
