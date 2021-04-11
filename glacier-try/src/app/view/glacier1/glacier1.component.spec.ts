import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Glacier1Component } from './glacier1.component';

describe('Glacier1Component', () => {
  let component: Glacier1Component;
  let fixture: ComponentFixture<Glacier1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Glacier1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Glacier1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
