import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel75Component } from './panel75.component';

describe('Panel75Component', () => {
  let component: Panel75Component;
  let fixture: ComponentFixture<Panel75Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Panel75Component]
    });
    fixture = TestBed.createComponent(Panel75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
