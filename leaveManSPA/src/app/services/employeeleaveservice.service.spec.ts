import { TestBed } from '@angular/core/testing';

import { EmployeeleaveserviceService } from './employeeleaveservice.service';

describe('EmployeeleaveserviceService', () => {
  let service: EmployeeleaveserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeleaveserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
