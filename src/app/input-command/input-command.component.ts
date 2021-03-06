import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-command',
  templateUrl: './input-command.component.html',
  styleUrls: ['./input-command.component.scss']
})
export class InputCommandComponent implements OnInit {
  @Output() userCommand = new EventEmitter<{ value: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onEnter(e) {
      this.userCommand.emit({value: e.target.value});
      e.target.select();
  }
}
