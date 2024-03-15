import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProgramComponent } from './detail-program.component';

describe('DetailProgramComponent', () => {
  let component: DetailProgramComponent;
  let fixture: ComponentFixture<DetailProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailProgramComponent]
    });
    fixture = TestBed.createComponent(DetailProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
