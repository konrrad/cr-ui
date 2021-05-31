import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeesContractsAllComponent } from './admin-employees-contracts-all.component';

describe('AdminEmployeesContractsAllComponent', () => {
  let component: AdminEmployeesContractsAllComponent;
  let fixture: ComponentFixture<AdminEmployeesContractsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeesContractsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeesContractsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
