import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalariesHistoryComponent } from './admin-salaries-history.component';

describe('AdminSalariesHistoryComponent', () => {
  let component: AdminSalariesHistoryComponent;
  let fixture: ComponentFixture<AdminSalariesHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSalariesHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSalariesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
