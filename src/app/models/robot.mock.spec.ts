import { Injectable } from '@angular/core';
import {getRandomInt} from '../utils';
import { CanvasService } from '../canvas.service';

@Injectable({
  providedIn: 'root'
})
export class Robot {
  // Note: I saw a video about when private variables were introduced into javaScript, 
  // and the hosts of the show were like just don't write a method that manipulates that variable.


  public x;
  public y;
  public color;
  public f;

  constructor(private canvasService: CanvasService, x: Number, y: number, color: string, f: string) {
    this.x = x;
    this.y = y;
    this.color = color ? color : 'black';
    this.f = f;
  }

  /* --------------------------------------------------- */
  /*         the following are command functions
  /* --------------------------------------------------- */
  place(cmd) {
    return cmd;

  }

  move() {
    switch (this.f) {
      default:
        break;
    }
  }
  left() {
    this.rotate(false); // get the next from this.robotFacing array in anti-clockwise direction
  }

  right() {
    this.rotate(true); // get the next from this.robotFacing array in clockwise direction
  }

  rotate(clockwise) {
 return clockwise;
    }
}
