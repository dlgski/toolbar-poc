import { Component, OnInit, Output, Input, EventEmitter, SystemJsNgModuleLoader, NgModuleFactory, ViewChild, ViewContainerRef, ReflectiveInjector } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store/store';

import { AdDirective } from '../ad.directive';
import { AddShiftComponent } from '../add-shift/add-shift.component';
import { AddPaycodeComponent } from '../add-paycode/add-paycode.component';
import { ReplaceShiftComponent } from '../replace-shift/replace-shift.component';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() private state;
  private actionSelected;
  private action;
  private componentRef;
  private subscription;
  @Output() onCloseButtonClick = new EventEmitter();

  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(
    private ngRedux: NgRedux<AppState>,
    private loader: SystemJsNgModuleLoader,
    public viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {}

  ngOnChanges(changes) {
    if(changes.state.currentValue) {
      this.subscribeActionSelected();
    } else {
      this.unsubscribeActionSelected();
    }
  }

  subscribeActionSelected() {
    this.actionSelected = this.ngRedux.select(state => state.context)
      .subscribe(context => {
        this.action = context.actionId;

        if( context.actionId === 'addShift' ) {
          this.getAddShift();
        } else if ( context.actionId === 'addPaycode' ) {
          this.getAddPaycode();
        } else if ( context.actionId === 'replaceShift' ) {
          this.getReplaceShift();
        }
      });
  }

  unsubscribeActionSelected() {
    if(this.actionSelected) {
      this.actionSelected.unsubscribe();
    }
  }

  getAddShift() {
    this.loader.load('./add-shift/add-shift.module#AddShiftModule').then((factory: NgModuleFactory<any>) => {
      let injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
      let factoryInjector = factory.create(injector);
      this.loadComponent(factoryInjector, AddShiftComponent);
    });
  }

  getAddPaycode() {
    this.loader.load('./add-paycode/add-paycode.module#AddPaycodeModule').then((factory: NgModuleFactory<any>) => {
      let injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
      let factoryInjector = factory.create(injector);
      this.loadComponent(factoryInjector, AddPaycodeComponent);
    });
  }

  getReplaceShift() {
    this.loader.load('./replace-shift/replace-shift.module#ReplaceShiftModule').then((factory: NgModuleFactory<any>) => {
      let injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
      let factoryInjector = factory.create(injector);
      this.loadComponent(factoryInjector, ReplaceShiftComponent);
    });
  }

  loadComponent(factoryInjector, component) {
    let componentFactory = factoryInjector.resolveComponentFactory(component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    this.ngRedux.select(state => state.context).subscribe(context => {
      this.componentRef.instance.data = context;
    });
  }
}
