import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSummaryDateVacComponent } from './admin-summary-date-vac.component';

describe('AdminSummaryDateVacComponent', () => {
  let component: AdminSummaryDateVacComponent;
  let fixture: ComponentFixture<AdminSummaryDateVacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSummaryDateVacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSummaryDateVacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
