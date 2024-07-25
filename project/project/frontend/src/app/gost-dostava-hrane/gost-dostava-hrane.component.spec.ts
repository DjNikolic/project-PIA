import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GostDostavaHraneComponent } from './gost-dostava-hrane.component';

describe('GostDostavaHraneComponent', () => {
  let component: GostDostavaHraneComponent;
  let fixture: ComponentFixture<GostDostavaHraneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GostDostavaHraneComponent]
    });
    fixture = TestBed.createComponent(GostDostavaHraneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
