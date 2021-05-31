import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBonusesHistoryComponent } from './admin-bonuses-history.component';

describe('AdminBonusesHistoryComponent', () => {
  let component: AdminBonusesHistoryComponent;
  let fixture: ComponentFixture<AdminBonusesHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBonusesHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBonusesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
