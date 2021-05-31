import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBonusFormComponent } from './admin-bonus-form.component';

describe('AdminBonusFormComponent', () => {
  let component: AdminBonusFormComponent;
  let fixture: ComponentFixture<AdminBonusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBonusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBonusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
