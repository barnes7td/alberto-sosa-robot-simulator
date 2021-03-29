import { Injectable } from '@angular/core';
import {getRandomInt} from '../utils.js';

@Injectable({
  providedIn: 'root'
})
export class Goal {
  private readonly x;
  private readonly y;

  constructor() {
        this.x = getRandomInt(0, 4);
        this.y = getRandomInt(0, 4);
        console.log(`Goal positioned at ${this.x}, ${this.y}`);
  }
}
