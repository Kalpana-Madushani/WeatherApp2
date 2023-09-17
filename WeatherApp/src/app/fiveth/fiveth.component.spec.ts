import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivethComponent } from './fiveth.component';

describe('FivethComponent', () => {
  let component: FivethComponent;
  let fixture: ComponentFixture<FivethComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FivethComponent]
    });
    fixture = TestBed.createComponent(FivethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
