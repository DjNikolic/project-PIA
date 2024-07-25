import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromenaLozinke3Component } from './promena-lozinke3.component';

describe('PromenaLozinke3Component', () => {
  let component: PromenaLozinke3Component;
  let fixture: ComponentFixture<PromenaLozinke3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromenaLozinke3Component]
    });
    fixture = TestBed.createComponent(PromenaLozinke3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
