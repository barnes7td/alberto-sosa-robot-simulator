import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { StatusComponent } from './status/status.component';
import { InputCommandComponentModule } from './input-command/input-command.component.module';
import { ErrorCardComponent } from './error-card/error-card.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { InitLoadingComponent } from './init-loading/init-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    StatusComponent,
    ErrorCardComponent,
    GameBoardComponent,
    InitLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputCommandComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
