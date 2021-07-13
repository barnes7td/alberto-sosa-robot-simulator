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
    window.addEventListener('keydown', (e)=>{this.move(e)} );
  }

  /**
   * @param e this is an $event
   * @returns void
   */
  onEnter(e: any): void {
      // e.target.select(); // TODO idk what this is for if possible remove
      return this.userCommand.emit({value: e.target.value});
  }

  move(e:any): void{
    return this.userCommand.emit({value: e.key});
  }

}
