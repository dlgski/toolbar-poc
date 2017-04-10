import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store/store';

@Component({
  selector: 'toolbar-button',
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.css']
})
export class ToolbarButtonComponent implements OnInit {
  @Input() private options;
  //@Output() onClick = new EventEmitter();

  private id;
  private name;
  private isEnable;
  private actionId;

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.id = this.options.id;
    this.name = this.options.name;
    this.isEnable = this.options.isEnable;
    this.actionId = this.options.actionId;
  }

  openAction(id) {
    this.ngRedux.dispatch({
      type: 'OPEN_ACTION',
      payload: {
        date: new Date(),
        actionId: id
      }
    })
  }


}
