import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { InputCommandComponentModule } from './input-command/input-command.component.module';
import { InstructionsComponent } from './instructions/instructions.component';
import { StatusComponent } from './status/status.component';

describe('AppComponent', () => {
  let app;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        InputCommandComponentModule
      ],
      declarations: [
        AppComponent,
        InstructionsComponent,
        StatusComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('creates the app', () => {
    // ASSERT
    expect(app).toBeTruthy();
  });

  it(`has title 'angular-robot-simulator'`, () => {
    // ASSERT
    expect(app.title).toEqual('angular-robot-simulator');
  });

  it('handles the restart command', () => {
    // ARRANGE
    const inputEvent = {value: 'restart'};
    const restartSpy = spyOn(app, 'restart');

    // ACT
    app.onUserCommand(inputEvent);

    // ASSERT
    expect(restartSpy).toHaveBeenCalled();
  });
});
