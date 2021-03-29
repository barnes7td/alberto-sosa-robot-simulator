import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import MainLoop from 'mainloop.js';
import { CanvasService } from './canvas.service';
import { Robot } from './models/robot';
import { Goal } from './models/goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('canvasRef') canvasRef: ElementRef<HTMLCanvasElement>;

  title = 'angular-robot-simulator';

  robot;
  private goal;
  private commands = {
    move: () => {
      this.robot.move();
    },
    left: () => {
      this.robot.left();
    },
    right: () => {
      this.robot.right();
    },
    place: (params) => {
      this.robot.place(params);
    },
    restart: () => {
      this.restart();
    },
  };

  constructor(private canvasService: CanvasService) {
    this.restart();
  }

  ngAfterViewInit() {
    this.canvasService.init(this.canvasRef.nativeElement);

    MainLoop
      .setUpdate(() => {
      })
      .setDraw(() => {
        this.canvasService.render(this.robot, this.goal);
      })
      .start();
  }

  onUserCommand(e) {
    const sanitizedValue = e.value.trim().toLocaleLowerCase();
    const sanitizedValueArray = sanitizedValue.split(' ');
    const firstWordEntered = sanitizedValueArray.splice(0, 1)[0];

    const cmdMethod = this.commands[firstWordEntered];
    if (cmdMethod) {
      cmdMethod(sanitizedValueArray.join()); // call controller functions by name
    } else {
      // 'Incorrect command' // todo handle errors
    }
  }

  restart() {
    this.robot = new Robot(this.canvasService);
    this.goal = new Goal();
  }
}
