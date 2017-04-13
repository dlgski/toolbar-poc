import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'add-paycode',
  templateUrl: './add-paycode.component.html',
  styleUrls: ['./add-paycode.component.css']
})
export class AddPaycodeComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
