import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input() currentRobot: {x: string, y: string, f: string };
  constructor() { }

  ngOnInit(): void {
  }

}
