import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromenaLozinke2Component } from './promena-lozinke2.component';

describe('PromenaLozinke2Component', () => {
  let component: PromenaLozinke2Component;
  let fixture: ComponentFixture<PromenaLozinke2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromenaLozinke2Component]
    });
    fixture = TestBed.createComponent(PromenaLozinke2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
