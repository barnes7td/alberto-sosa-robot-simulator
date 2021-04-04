import { Injectable } from '@angular/core';
import {getRandomInt} from '../utils.js';

@Injectable({
  providedIn: 'root'
})
export class Goal {
  public x;
  public y;

  constructor(x: number, y:number) {
        this.x = x;
        this.y = y;
  }
}
