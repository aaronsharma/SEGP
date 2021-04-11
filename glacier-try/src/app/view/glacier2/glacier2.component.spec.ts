import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Glacier2Component } from './glacier2.component';

describe('Glacier2Component', () => {
  let component: Glacier2Component;
  let fixture: ComponentFixture<Glacier2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Glacier2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Glacier2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
