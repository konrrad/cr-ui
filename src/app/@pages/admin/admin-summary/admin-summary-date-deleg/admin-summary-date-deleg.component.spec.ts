import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSummaryDateDelegComponent } from './admin-summary-date-deleg.component';

describe('AdminSummaryDateDelegComponent', () => {
  let component: AdminSummaryDateDelegComponent;
  let fixture: ComponentFixture<AdminSummaryDateDelegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSummaryDateDelegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSummaryDateDelegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
