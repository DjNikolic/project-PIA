import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestoraniComponent } from './admin-restorani.component';

describe('AdminRestoraniComponent', () => {
  let component: AdminRestoraniComponent;
  let fixture: ComponentFixture<AdminRestoraniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRestoraniComponent]
    });
    fixture = TestBed.createComponent(AdminRestoraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
