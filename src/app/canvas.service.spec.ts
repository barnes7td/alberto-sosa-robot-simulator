import { TestBed } from '@angular/core/testing';

import { CanvasService } from './canvas.service';

describe('CanvasService', () => {
  let service: CanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvasService);
  });

  it('is created', () => {
    expect(service).toBeTruthy();
  });
});
