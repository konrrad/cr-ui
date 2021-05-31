import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeesContractsComponent } from './admin-employees-contracts.component';

describe('AdminEmployeesContractsComponent', () => {
  let component: AdminEmployeesContractsComponent;
  let fixture: ComponentFixture<AdminEmployeesContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeesContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeesContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
