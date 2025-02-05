import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VxPopupComponent } from './vx-popup.component';

describe('VxPopupComponent', () => {
  let component: VxPopupComponent;
  let fixture: ComponentFixture<VxPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VxPopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VxPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
