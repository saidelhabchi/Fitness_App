import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgDetailComponent } from './prog-detail.component';

describe('ProgDetailComponent', () => {
  let component: ProgDetailComponent;
  let fixture: ComponentFixture<ProgDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgDetailComponent]
    });
    fixture = TestBed.createComponent(ProgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
