import { Injectable } from '@angular/core';
import {getRandomInt} from '../util/utils.js';

@Injectable({
  providedIn: 'root'
})
export class Goal {
  public readonly x;
  public readonly y;

  constructor() {
        this.x = getRandomInt(0, 4);
        this.y = getRandomInt(0, 4);
        console.log(`Goal positioned at ${this.x}, ${this.y}`);
  }
}
