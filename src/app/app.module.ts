import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MainComponent  } from './main/main.component';
import { ToolbarButtonComponent } from './toolbar-button/toolbar-button.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { ToolbarService } from './toolbar.service';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolbarButtonComponent,
    ToolbarComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    routing
  ],
  providers: [ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
