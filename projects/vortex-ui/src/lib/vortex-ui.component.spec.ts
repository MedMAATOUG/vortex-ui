import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VortexUiComponent } from './vortex-ui.component';

describe('VortexUiComponent', () => {
  let component: VortexUiComponent;
  let fixture: ComponentFixture<VortexUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VortexUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VortexUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
