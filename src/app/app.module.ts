import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent  } from './main/main.component';
import { ToolbarButtonComponent } from './toolbar-button/toolbar-button.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { ToolbarService } from './toolbar.service';

import { AdDirective } from './ad.directive';
import { AddPaycodeComponent } from './add-paycode/add-paycode.component';
import { ReplaceShiftComponent } from './replace-shift/replace-shift.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent },
  {path: 'add-shift', loadChildren: './add-shift/add-shift.module#AddShiftModule'}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolbarButtonComponent,
    ToolbarComponent,
    AddPaycodeComponent,
    ReplaceShiftComponent,
    SliderComponent,
    AdDirective
  ],
  //entryComponents: [AddShiftComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    routing
  ],
  providers: [ToolbarService, SystemJsNgModuleLoader],
  bootstrap: [AppComponent]
})
export class AppModule {

}
