import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoviRestoranComponent } from './admin-novi-restoran.component';

describe('AdminNoviRestoranComponent', () => {
  let component: AdminNoviRestoranComponent;
  let fixture: ComponentFixture<AdminNoviRestoranComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNoviRestoranComponent]
    });
    fixture = TestBed.createComponent(AdminNoviRestoranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
