import { Injectable } from '@angular/core';
import { Goal } from '../models/goal';
import { Robot } from '../models/robot';
import { ErrorReporterService } from './error-reporter.service';
// TODO import { RobotFacing } from './models/robot-facing.enum';

@Injectable({
  providedIn: 'root'
})


export class CanvasService {
  // TODO declare robot facing as enum but then you have to change more stuff
  robotFacing = ['north', 'east', 'south', 'west']; // clockwise

  private readonly maxX = 20; // x total
  private readonly maxY = 20; // y total
  private readonly squareSize = 25; // all grids are equal width and height
  private readonly xStart = 50; // axis x starts from 50px
  private readonly yStart = 50; // axis y starts from 50px
  private readonly xEnd = this.xStart + this.squareSize * this.maxX; // axis x starts from 50px
  private readonly yEnd = this.yStart + this.squareSize * this.maxY; // axis y starts from 50px
  private robotSize = 15; // is the arrow size actually
  private context;

  constructor(private errorService: ErrorReporterService) {
  }

  init(canvas): void {
    this.context = canvas.getContext('2d');
  }

  render(robot: Robot, goal: Goal): void {
    this.context.clearRect(0, 0, 551, 580); // TODO: Magic dimensions
    this.renderCanvas();
    this.renderGoal(robot, goal);
    this.renderRobot(robot);
    if (this.atGoal(robot, goal)){

    }
  }

  // NOTE: if you have private params and declare type you would not be able to verify this
  atGoal(robot, goal: Goal): boolean {
    return (robot.x === goal.x && robot.y === goal.y);
  }

  wallInFront(robot): boolean {
    switch (robot.f) {
      case 'north': {
        return robot.y === this.maxY - 1;
      }
      case 'south': {
        return robot.y === 0;
      }
      case 'east': {
        return robot.x === this.maxX - 1;
      }
      case 'west': {
        return robot.x === 0;
      }
      default:
        console.error(`Invalid orientation ${robot.f}`);
        this.errorService.updateError(`Invalid orientation ${robot.f}`);
        return false;
    }
  }

  renderCanvas(): void {
    this.context.strokeStyle = '#000';

    for (let x = 0; x < (this.maxX + 1); x++) { // draw 6 lines
      const currentAxisX = this.xStart + x * this.squareSize;
      this.context.moveTo(currentAxisX, this.yStart);
      this.context.lineTo(currentAxisX, this.yEnd);

      this.context.strokeText(x, currentAxisX + 12, this.yEnd + 20); // mark x index
    }

    for (let y = 0; y < (this.maxY + 1); y++) {
      const currentAxisY = this.yStart + y * this.squareSize;
      this.context.moveTo(this.xStart, currentAxisY);
      this.context.lineTo(this.xEnd, currentAxisY);

      this.context.strokeText((this.maxY - 1 - y), this.xStart - 20, currentAxisY + 20); // mark y index
    }

    this.context.stroke();
  }

  validateBound(input: number, toCheckAxis: string): boolean {
    let maxAxis;
    toCheckAxis === 'maxX' ? maxAxis = this.maxX : maxAxis = this.maxY;
    if (isNaN(input)) {
      this.errorService.updateError('Please enter numeric coordinates!'); // 'Please enter a numeric coordinates!
      return false;
    } else if (input < 0 || input > (maxAxis - 1)) {

      this.errorService.updateError('Coordinates out of range!'); // 'Coordinates out of range!'
      return false;
    } else {
      return true;
    }
  }

  validateFacing(face: string): boolean {
    if (this.robotFacing.indexOf(face.toLowerCase()) < 0) {
      this.errorService.updateError('Wrong facing!'); // 'Wrong facing!'
      return false;
    } else {
      return true;
    }
  }

  renderRobot(robot): void {
    const robotAxisX = (robot.x + 1) * 25; // the center of the destination grid horizontally
    const robotAxisY = (this.maxY - robot.y) * 25; // the center of the destination grid vertically

    const path = new Path2D();
    switch (robot.f) {
      case 'north':
        path.moveTo(robotAxisX, robotAxisY - this.robotSize);
        path.lineTo(robotAxisX - this.robotSize, robotAxisY);
        path.lineTo(robotAxisX + this.robotSize, robotAxisY);
        break;
      case 'south':
        path.moveTo(robotAxisX, robotAxisY + this.robotSize);
        path.lineTo(robotAxisX - this.robotSize, robotAxisY);
        path.lineTo(robotAxisX + this.robotSize, robotAxisY);
        break;
      case 'east':
        path.moveTo(robotAxisX + this.robotSize, robotAxisY);
        path.lineTo(robotAxisX, robotAxisY - this.robotSize);
        path.lineTo(robotAxisX, robotAxisY + this.robotSize);
        break;
      case 'west':
        path.moveTo(robotAxisX - this.robotSize, robotAxisY);
        path.lineTo(robotAxisX, robotAxisY - this.robotSize);
        path.lineTo(robotAxisX, robotAxisY + this.robotSize);
        break;
      default:
        break;
    }

    path.closePath();

    this.context.fillStyle = robot.color;
    this.context.strokeStyle = robot.color;
    this.context.stroke(path);
    this.context.fill(path);
  }

  renderGoal(robot: Robot, goal: Goal): void {
    const centerX = (goal.x + 1) * 25;
    const centerY = (this.maxY - goal.y) * 25;
    const radius = 5;

    const context = this.context;

    const path = new Path2D();
    path.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    path.closePath();

    if (this.atGoal(robot, goal)) {
      context.fillStyle = 'blue';
    }

    context.stroke(path);
    context.fill(path);

    context.fillStyle = 'black';
  }
}
