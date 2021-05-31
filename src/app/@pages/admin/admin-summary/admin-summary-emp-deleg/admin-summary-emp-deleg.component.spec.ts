import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSummaryEmpDelegComponent } from './admin-summary-emp-deleg.component';

describe('AdminSummaryEmpDelegComponent', () => {
  let component: AdminSummaryEmpDelegComponent;
  let fixture: ComponentFixture<AdminSummaryEmpDelegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSummaryEmpDelegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSummaryEmpDelegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
