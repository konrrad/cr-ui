import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVacationsComponent } from './admin-vacations.component';

describe('HolidayAdminviewComponent', () => {
  let component: AdminVacationsComponent;
  let fixture: ComponentFixture<AdminVacationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVacationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
