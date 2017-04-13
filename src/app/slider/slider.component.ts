import { Component, OnInit, SystemJsNgModuleLoader, NgModuleFactory, ViewChild, ViewContainerRef, ReflectiveInjector } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store/store';

import { AdDirective } from '../ad.directive';
import { AddShiftComponent } from '../add-shift/add-shift.component';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  private actionSelected;
  private action;
  private componentRef;

  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(
    private ngRedux: NgRedux<AppState>,
    private loader: SystemJsNgModuleLoader,
    public viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.actionSelected = this.ngRedux.select(state => state.context)
      .subscribe(context => {
        this.action = context.actionId;

        this.loader.load('./add-shift/add-shift.module#AddShiftModule').then((factory: NgModuleFactory<any>) => {
          let injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
          let factoryInjector = factory.create(injector);
          this.loadComponent(factoryInjector, AddShiftComponent);
        });
      });
  }

  loadComponent(factoryInjector, component) {
    let componentFactory = factoryInjector.resolveComponentFactory(component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }



}
