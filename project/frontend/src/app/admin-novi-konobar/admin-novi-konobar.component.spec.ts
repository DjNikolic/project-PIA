import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoviKonobarComponent } from './admin-novi-konobar.component';

describe('AdminNoviKonobarComponent', () => {
  let component: AdminNoviKonobarComponent;
  let fixture: ComponentFixture<AdminNoviKonobarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNoviKonobarComponent]
    });
    fixture = TestBed.createComponent(AdminNoviKonobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
