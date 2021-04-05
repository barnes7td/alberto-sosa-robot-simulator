import { TestBed } from '@angular/core/testing';

import { Robot } from './robot';

describe('RobotService', () => {
  // Note: this should probably be robot.service.ts
  let service: Robot;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Robot);
  });

  it('is created', () => {
    expect(service).toBeDefined();
  });

  it('can invoke the place function', () => {
    service.place('3,4,north');
    expect(service.x).toBe(3);
    expect(service.y).toBe(4);
    expect(service.f).toBe('north');
  });

  it('will not move if place function incorrect', () => {
    service.place('3,4,north');
    service.place('2,2,sou');
    expect(service.x).toBe(3);
    expect(service.y).toBe(4);
    expect(service.f).toBe('north');
  });

  it('robot moves correctly: left(); right(); move(); rotate();', () => {
    service.place('3,3,east');
    service.move();
    expect(service.x).toBe(4);
    service.left();
    expect(service.f).toBe('north');
    service.move();
    expect(service.y).toBe(4);
    service.right();
    service.right();
    service.move();
    expect(service.y).toBe(3);
  });

});
