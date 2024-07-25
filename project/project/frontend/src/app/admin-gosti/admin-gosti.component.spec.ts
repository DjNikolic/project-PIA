import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGostiComponent } from './admin-gosti.component';

describe('AdminGostiComponent', () => {
  let component: AdminGostiComponent;
  let fixture: ComponentFixture<AdminGostiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminGostiComponent]
    });
    fixture = TestBed.createComponent(AdminGostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
