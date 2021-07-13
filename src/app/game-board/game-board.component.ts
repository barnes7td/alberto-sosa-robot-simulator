import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Goal } from '../shared/models/goal';
import { Robot } from '../shared/models/robot';
import { CanvasService } from '../shared/services/canvas.service';
import { ErrorReporterService } from '../shared/services/error-reporter.service';
import MainLoop from 'mainloop.js';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  @ViewChild('canvasRef') canvasRef: ElementRef<HTMLCanvasElement>;

  title = 'Nom Kitties';
  robot: Robot;
  points=0;
  private goal: Goal;
  private commands = {
    move: () => {
      this.robot.move();
    },
    ArrowUp: () => {
      this.robot.arrowUp();
    },
    ArrowDown: () => {
      this.robot.arrowDown();
    },
    ArrowLeft: () => {
      this.robot.arrowLeft();
    },
    ArrowRight:() => {
      this.robot.arrowRight();
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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
    console.log('game board', e)


    const cmdMethod = this.commands[e.value];
    if (cmdMethod) {

      cmdMethod(e.value); // call controller functions by name
      if (this.canvasService.atGoal(this.robot, this.goal)){
        this.goal = new Goal();
        this.points++;
      }
    } else {
      this.errorService.updateError('Incorrect command');
    }
  }

  restart(): void {
    this.robot = new Robot(this.canvasService, this.errorService);
    this.goal = new Goal();
    if (this.canvasService.atGoal(this.robot, this.goal)){
      this.restart();
    }
    this.errorService.updateError('clear');
  }

}
