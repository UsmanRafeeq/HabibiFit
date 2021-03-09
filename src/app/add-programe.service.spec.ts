import { TestBed } from '@angular/core/testing';

import { AddProgrameService } from './add-programe.service';

describe('AddProgrameService', () => {
  let service: AddProgrameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProgrameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
