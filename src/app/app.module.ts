import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { StatusComponent } from './status/status.component';
import { InputCommandComponentModule } from './input-command/input-command.component.module';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    StatusComponent
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
