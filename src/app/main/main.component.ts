import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  ngOnInit() {
  }
  
  toggleSlider(ev) {
    this.isOpen = !this.isOpen;
  }

}
