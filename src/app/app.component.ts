import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { AppState } from './store/store';
import { store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Toolbar Angular 2!';
  isOpen: boolean;

  constructor(
    private ngRedux: NgRedux<AppState>) {
    ngRedux.provideStore(store);

    this.isOpen = false;
  }

  ngOnInit() {

  }

  toggleSlider(ev) {
    console.log('event : ', ev);
    this.isOpen = !this.isOpen;
  }
}
