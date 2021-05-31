import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContractGenComponent } from './admin-contract-gen.component';

describe('AdminContractGenComponent', () => {
  let component: AdminContractGenComponent;
  let fixture: ComponentFixture<AdminContractGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContractGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContractGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
