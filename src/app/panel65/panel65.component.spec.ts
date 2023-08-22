import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel65Component } from './panel65.component';

describe('Panel65Component', () => {
  let component: Panel65Component;
  let fixture: ComponentFixture<Panel65Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Panel65Component]
    });
    fixture = TestBed.createComponent(Panel65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
