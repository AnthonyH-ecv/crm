import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoObservableChaudComponent } from './demo-observable-chaud.component';

describe('DemoObservableChaudComponent', () => {
  let component: DemoObservableChaudComponent;
  let fixture: ComponentFixture<DemoObservableChaudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoObservableChaudComponent]
    });
    fixture = TestBed.createComponent(DemoObservableChaudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
