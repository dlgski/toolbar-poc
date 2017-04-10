import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaycodeComponent } from './add-paycode.component';

describe('AddPaycodeComponent', () => {
  let component: AddPaycodeComponent;
  let fixture: ComponentFixture<AddPaycodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPaycodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
