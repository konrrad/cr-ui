import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSummaryEmpVacComponent } from './admin-summary-emp-vac.component';

describe('AdminSummaryEmpVacComponent', () => {
  let component: AdminSummaryEmpVacComponent;
  let fixture: ComponentFixture<AdminSummaryEmpVacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSummaryEmpVacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSummaryEmpVacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
