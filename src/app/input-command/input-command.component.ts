import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
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

  onEnter(e): void {
      e.target.select(); // TODO idk what this is for if possible remove
      return this.userCommand.emit({value: e.target.value});
  }
}
