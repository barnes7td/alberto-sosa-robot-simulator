import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import MainLoop from 'mainloop.js';
import { CanvasService } from './shared/services/canvas.service';
import { Robot } from './shared/models/robot';
import { Goal } from './shared/models/goal';
import { ErrorReporterService } from './shared/services/error-reporter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('canvasRef') canvasRef: ElementRef<HTMLCanvasElement>;

  title = 'Angular Robot Simulator';

  robot: Robot;
  private goal: Goal;
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

  constructor(private canvasService: CanvasService, private errorService: ErrorReporterService) {
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

  /**
   * @param e this is an $event type object
   */

  onUserCommand(e: any): void{
    const sanitizedValue = e.value.trim().toLocaleLowerCase();
    const sanitizedValueArray = sanitizedValue.split(' ');
    const firstWordEntered = sanitizedValueArray.splice(0, 1)[0];

    const cmdMethod = this.commands[firstWordEntered];
    if (cmdMethod) {
      cmdMethod(sanitizedValueArray.join()); // call controller functions by name
    } else {
      this.errorService.updateError('Incorrect command');
    }
  }

  restart(): void {
    this.robot = new Robot(this.canvasService);
    this.goal = new Goal();
    if (this.canvasService.atGoal(this.robot, this.goal)){
      this.restart();
    }
    this.errorService.updateError('clear');
  }
}
