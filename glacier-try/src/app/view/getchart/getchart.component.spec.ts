import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetchartComponent } from './getchart.component';

describe('GetchartComponent', () => {
  let component: GetchartComponent;
  let fixture: ComponentFixture<GetchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
