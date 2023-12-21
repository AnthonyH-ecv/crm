import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoObservableFroidComponent } from './demo-observable-froid.component';

describe('DemoObservableFroidComponent', () => {
  let component: DemoObservableFroidComponent;
  let fixture: ComponentFixture<DemoObservableFroidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoObservableFroidComponent]
    });
    fixture = TestBed.createComponent(DemoObservableFroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
