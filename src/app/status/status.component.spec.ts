import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StatusComponent } from './status.component';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;
  let spanX: HTMLElement;
  let spanY: HTMLElement;
  let spanF: HTMLElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    component.currentRobot = { x: 1, y: 2, f: 'north' };
    spanX = fixture.nativeElement.querySelector('#x');
    spanY = fixture.nativeElement.querySelector('#y');
    spanF = fixture.nativeElement.querySelector('#f');
    fixture.detectChanges();
  });

  it('creates status componet', () => {
    expect(component).toBeDefined();
  });

  it('displays current robot information ', () => {
    expect(spanX.textContent).toContain('Axis X: 1');
    expect(spanY.textContent).toContain('Axis Y: 2');
    expect(spanF.textContent).toContain('Facing: north');
  });
});
