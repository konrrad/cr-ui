import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegApplicationComponent } from './deleg-application.component';

describe('DelegApplicationComponent', () => {
  let component: DelegApplicationComponent;
  let fixture: ComponentFixture<DelegApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
