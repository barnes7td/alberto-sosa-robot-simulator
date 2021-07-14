import { Injectable } from '@angular/core';
import {getRandomInt} from '../util/utils';
import { CanvasService } from '../services/canvas.service';
import { ErrorReporterService } from '../services/error-reporter.service';

@Injectable({
  providedIn: 'root'
})
export class Robot {
  // Note: I saw a video about when private variables were introduced into javaScript,
  // and the hosts of the show were like just don't write a method that manipulates that variable.
  public x: number;
  public y: number;
  public color: string;
  public f: string;
  public balls: number;

  constructor(private canvasService: CanvasService, private errorService: ErrorReporterService) {
    this.x = getRandomInt(0, 4);
    this.y = getRandomInt(0, 4);
    this.color = 'black';
    this.f = ['north', 'east', 'south', 'west'][getRandomInt(0, 3)];
    console.log(`Robot positioned at ${this.x}, ${this.y}, ${this.f}`);
  }

  /* --------------------------------------------------- */
  /*         the following are command functions
  /* --------------------------------------------------- */

  /**
   * @description this allows users 'place' the robot to wherever it needs to be
   * @param cmd should contain two commas
   */
  place(cmd: string): void {
    const newPos = cmd.split(','); // get x y f from the command
    if (newPos.length < 3) {
      this.errorService.updateError('incorrect position/direction'); // this.printErrors('incorrect position / direction');
    } else {
      const newX = parseInt(newPos[0].trim(), 10);
      const newY = parseInt(newPos[1].trim(), 10);
      const newF = newPos[2].trim().toLowerCase();

      if (this.canvasService.validateBound(newX, 'maxX') &&
        this.canvasService.validateBound(newY, 'maxY') &&
        this.canvasService.validateFacing(newF)) {
        this.x = newX;
        this.y = newY;
        this.f = newF;
      }
    }
  }

  move(): void {
    switch (this.f) {
      case 'north': {
        const newY = this.y + 1;
        if (this.canvasService.validateBound(newY, 'maxY')) {
          this.y = newY;
        }
        break;
      }
      case 'south': {
        const newY = this.y - 1;
        if (this.canvasService.validateBound(newY, 'maxY')) {
          this.y = newY;
        }
        break;
      }
      case 'east': {
        const newX = this.x + 1;
        if (this.canvasService.validateBound(newX, 'maxX')) {
          this.x = newX;
        }
        break;
      }
      case 'west': {
        const newX = this.x - 1;
        if (this.canvasService.validateBound(newX, 'maxX')) {
          this.x = newX;
        }
        break;
      }
      default:
        break;
    }
  }
  left(): void {
    this.rotate(false); // get the next from this.robotFacing array in anti-clockwise direction
  }
  arrowUp():void {
    this.f = 'north'
    this.move();
  }
  arrowDown(): void {
    this.f = 'south'
    this.move();
  }
  arrowLeft(): void {
    this.f = 'west'
    this.move();
  }
  arrowRight(): void {
    this.f = 'east'
    this.move();
  }


  rotate(clockwise: boolean): void {
    const originalFacing = this.f;
    const originalFacingIndex = this.canvasService.robotFacing.indexOf(originalFacing);
    let newFacingIndex;
    const totalFacing = this.canvasService.robotFacing.length;

    if (clockwise) {
      if (originalFacingIndex === (totalFacing - 1)) {
        newFacingIndex = 0;
      } else {
        newFacingIndex = originalFacingIndex + 1;
      }
    } else {
      if (originalFacingIndex === 0) {
        newFacingIndex = totalFacing - 1;
      } else {
        newFacingIndex = originalFacingIndex - 1;
      }
    }

    this.f = this.canvasService.robotFacing[newFacingIndex];
  }
}
