import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeesRowComponent } from './admin-employees-row.component';

describe('AdminEmployeesRowComponent', () => {
  let component: AdminEmployeesRowComponent;
  let fixture: ComponentFixture<AdminEmployeesRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeesRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
