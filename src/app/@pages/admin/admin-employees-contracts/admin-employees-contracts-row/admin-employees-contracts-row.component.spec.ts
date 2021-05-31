import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeesContractsRowComponent } from './admin-employees-contracts-row.component';

describe('AdminEmployeesContractsRowComponent', () => {
  let component: AdminEmployeesContractsRowComponent;
  let fixture: ComponentFixture<AdminEmployeesContractsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeesContractsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeesContractsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
