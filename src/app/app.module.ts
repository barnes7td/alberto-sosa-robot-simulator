import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { StatusComponent } from './status/status.component';
import { InputCommandComponentModule } from './input-command/input-command.component.module';
import { ErrorCardComponent } from './error-card/error-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    StatusComponent,
    ErrorCardComponent
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
