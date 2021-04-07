import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { InputCommandComponentModule } from './input-command/input-command.component.module';
import { InstructionsComponent } from './instructions/instructions.component';
import { StatusComponent } from './status/status.component';
import { ErrorCardComponent } from './error-card/error-card.component';

describe('AppComponent', () => {
  let title: HTMLElement;
  let app;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        InputCommandComponentModule
      ],
      declarations: [
        AppComponent,
        InstructionsComponent,
        StatusComponent,
        ErrorCardComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the app', () => {
    expect(app).toBeDefined();
  });

  it(`has title 'Angular Robot Simulator'`, () => {
    title = fixture.nativeElement.querySelector('#ex1');
    expect(app.title).toEqual('Angular Robot Simulator');
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

  it('handles the onUserCommand command', () => {

    // ARRANGE
    const inputEvent = {value: 'move'};
    const onUserCommandSpy = spyOn(app, 'onUserCommand');

    // ACT
    app.onUserCommand(inputEvent);

    // ASSERT
    expect(onUserCommandSpy).toHaveBeenCalled();
  });
});
