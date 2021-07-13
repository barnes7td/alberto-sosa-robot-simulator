import { Injectable } from '@angular/core';
import {getRandomInt} from '../util/utils.js';

@Injectable({
  providedIn: 'root'
})
export class Goal {
  public readonly x: number;
  public readonly y: number;

  constructor() {
        this.x = getRandomInt(0, 19);
        this.y = getRandomInt(0, 19);
        console.log(`Goal positioned at ${this.x}, ${this.y}`);
  }
}
