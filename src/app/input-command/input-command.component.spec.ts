import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCommandComponent } from './input-command.component';

describe('InputCommandComponent', () => {
  let component: InputCommandComponent;
  let fixture: ComponentFixture<InputCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });
});
