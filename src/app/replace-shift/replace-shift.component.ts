import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'replace-shift',
  templateUrl: './replace-shift.component.html',
  styleUrls: ['./replace-shift.component.css']
})
export class ReplaceShiftComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {}
}
