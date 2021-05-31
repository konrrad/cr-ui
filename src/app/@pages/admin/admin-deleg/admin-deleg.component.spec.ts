import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDelegComponent } from './admin-deleg.component';

describe('DelegAdminviewComponent', () => {
  let component: AdminDelegComponent;
  let fixture: ComponentFixture<AdminDelegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDelegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDelegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
