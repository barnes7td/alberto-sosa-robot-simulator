import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { InputCommandComponent } from './input-command.component';

describe('InputCommandComponent', () => {
  let component: InputCommandComponent;
  let fixture: ComponentFixture<InputCommandComponent>;
  let inputDe: DebugElement;
  let inputEl: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCommandComponent);
    component = fixture.componentInstance;

    inputDe = fixture.debugElement.query(By.css('#command'));
    inputEl = inputDe.nativeElement;
    fixture.detectChanges();
  });

  it('creates input command component', () => {
    expect(component).toBeDefined();
  });

  it('should find input with an autoFocus Attribute', () => {
    const hostElem = fixture.debugElement;
    const inputElem = hostElem.query(By.css('input'));
    const i: HTMLElement = inputElem.nativeElement;
    expect(i.getAttributeNames().includes('autofocus')).toBeTruthy();
  })

  it('raises event when keyup', () => {
    const e = {
      target: {
        select: () => null,
        value: 'right'
      }
    };
    component.userCommand.subscribe((value) => expect(value).toEqual({value: 'right'}));
    component.onEnter(e);
  });

});
