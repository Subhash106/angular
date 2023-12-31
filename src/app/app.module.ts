import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { NumbersComponent } from './numbers/numbers.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { AdvanceHighlightDirective } from './advance-highlight.directive';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    NumbersComponent,
    BasicHighlightDirective,
    AdvanceHighlightDirective,
    ShortenPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
