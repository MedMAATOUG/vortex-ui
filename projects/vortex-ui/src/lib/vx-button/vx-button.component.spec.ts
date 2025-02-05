import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VxButtonComponent } from './vx-button.component';

describe('VxButtonComponent', () => {
  let component: VxButtonComponent;
  let fixture: ComponentFixture<VxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VxButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
