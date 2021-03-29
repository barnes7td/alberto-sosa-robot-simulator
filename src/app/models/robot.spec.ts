import { TestBed } from '@angular/core/testing';

import { Robot } from './robot';

describe('RobotService', () => {
  let service: Robot;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Robot);
  });

  it('is created', () => {
    expect(service).toBeTruthy();
  });
});
