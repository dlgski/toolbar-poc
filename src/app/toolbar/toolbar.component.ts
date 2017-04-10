import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToolbarService } from '../toolbar.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  buttonsList: any[];
  @Output() onButtonClick = new EventEmitter();

  constructor(private toolbarService: ToolbarService) {}

  ngOnInit() {
    this.toolbarService.getButtonsList()
      .then(buttonsList => {
        this.buttonsList = buttonsList;
      });
  }

  onClick(ev) {
    console.log('toolbar onclick : ', ev);
    this.onButtonClick.emit();
  }


}
