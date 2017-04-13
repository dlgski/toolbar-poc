import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.css']
})
export class AddShiftComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit() {}
}
