import { TestBed } from '@angular/core/testing';
import { CanvasService } from './canvas.service';
import { Robot } from '../models/robot';
import { Goal } from '../models/goal';
import { Goal as MockGoal } from '../models/goal.mock.spec';


describe('CanvasService', () => {
  let service: CanvasService;
  let spy: any;
  let spy1: any;
  let spy2: any;
  let spy3: any;
  // let spy4: any;
  let robot: Robot;
  let goal: Goal;
  let mockGoal: MockGoal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvasService);
    robot = new Robot(service);
  });


  it('is created', () => {
    expect(service).toBeTruthy();
  });

  it('verifies robot is at goal', () => {
    robot.place('3,3,north');
    mockGoal = new MockGoal(3, 3);
    expect(service.atGoal(robot, mockGoal)).toBeTruthy();
  });

  it ('can call the renderCanvas Method', () => {
    spy = spyOn(service, 'renderCanvas');
    service.renderCanvas();
    expect(spy).toHaveBeenCalled();
  });

  it('verifies if wall in front of robot', () => {
    robot.place('4,4,north');
    expect(service.wallInFront(robot)).toBeTrue();
  });

  it('verifies no wall in front of robot', () => {
    robot.place('2,2,north');
    expect(service.wallInFront(robot)).toBeFalse();
  });

  it('verifies input is within bounds', () => {
   // service.validateBound('4,4,north', 5);
    expect(service.validateBound(4, 'maxX')).toBeTruthy();
  });

  it('verifies input is out of bounds', () => {
    // service.validateBound('4,4,north', 5);
     expect(service.validateBound(-7, 'maxY')).toBeFalse();
     expect(service.validateBound(8, 'maxX')).toBeFalse();
   });

  it('validates facing', () => {
    expect(service.validateFacing('east')).toBeTruthy();
    expect(service.validateFacing('wrong')).toBeFalse();
  });

  it('can call the renderRobot method', () => {
    spy = spyOn(service, 'renderRobot');
    service.renderRobot(robot);
    expect(spy).toHaveBeenCalled();
  });

  it('it can call the renderGoal method', () => {
    spy = spyOn(service, 'renderGoal');
    goal = new Goal();
    service.renderGoal(robot, goal);
    expect(spy).toHaveBeenCalled();
  });

  xit('renders canvas, robot, and goal', () => {
    spy1 = spyOn(service, 'renderCanvas');
    spy2 = spyOn(service, 'renderGoal');
    spy3 = spyOn(service, 'renderRobot');

    // TODO figure out how to test context and html canvas stuff
    // spy4 = spyOn(service, 'context');
    robot = new Robot(service);
    goal = new Goal();
    service.render(robot, goal);
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
    expect(spy3).toHaveBeenCalled();
  });

});
