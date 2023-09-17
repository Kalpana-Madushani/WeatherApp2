import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixComponent } from './six.component';

describe('SixComponent', () => {
  let component: SixComponent;
  let fixture: ComponentFixture<SixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixComponent]
    });
    fixture = TestBed.createComponent(SixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
