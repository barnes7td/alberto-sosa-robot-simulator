import { Injectable } from '@angular/core';
import {getRandomInt} from '../utils.js';

@Injectable({
  providedIn: 'root'
})
export class Goal {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
  }
}
