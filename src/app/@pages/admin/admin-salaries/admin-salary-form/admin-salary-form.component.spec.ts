import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalaryFormComponent } from './admin-salary-form.component';

describe('AdminSalaryFormComponent', () => {
  let component: AdminSalaryFormComponent;
  let fixture: ComponentFixture<AdminSalaryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSalaryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSalaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
