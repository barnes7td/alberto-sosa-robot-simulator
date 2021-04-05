import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsComponent } from './instructions.component';

describe('InstructionsComponent', () => {
  let component: InstructionsComponent;
  let fixture: ComponentFixture<InstructionsComponent>;
  let ex1: HTMLElement;
  let ex2: HTMLElement;
  let ex3: HTMLElement;
  let ex4: HTMLElement;
  let ex5: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates a component with instuctions', () => {
    expect(component).toBeDefined();
  });

  it('has examples', () => {
    ex1 = fixture.nativeElement.querySelector('#ex1');
    ex2 = fixture.nativeElement.querySelector('#ex2');
    ex3 = fixture.nativeElement.querySelector('#ex3');
    ex4 = fixture.nativeElement.querySelector('#ex4');
    ex5 = fixture.nativeElement.querySelector('#ex5');
    expect(ex1.textContent).toContain('restart');
    expect(ex2.textContent).toContain('move');
    expect(ex3.textContent).toContain('left');
    expect(ex4.textContent).toContain('right');
    expect(ex5.textContent).toContain('place 1,2,west');
  })
});
