import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceShiftComponent } from './replace-shift.component';

describe('ReplaceShiftComponent', () => {
  let component: ReplaceShiftComponent;
  let fixture: ComponentFixture<ReplaceShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
