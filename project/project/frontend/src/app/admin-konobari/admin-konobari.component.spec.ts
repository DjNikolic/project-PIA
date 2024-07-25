import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKonobariComponent } from './admin-konobari.component';

describe('AdminKonobariComponent', () => {
  let component: AdminKonobariComponent;
  let fixture: ComponentFixture<AdminKonobariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminKonobariComponent]
    });
    fixture = TestBed.createComponent(AdminKonobariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
