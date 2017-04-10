import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { ToolbarButtonComponent } from './toolbar-button/toolbar-button.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import {ToolbarService } from './toolbar.service';
import { AddShiftComponent } from './add-shift/add-shift.component';
import { AddPaycodeComponent } from './add-paycode/add-paycode.component';
import { ReplaceShiftComponent } from './replace-shift/replace-shift.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarButtonComponent,
    ToolbarComponent,
    AddShiftComponent,
    AddPaycodeComponent,
    ReplaceShiftComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
  ],
  providers: [ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
