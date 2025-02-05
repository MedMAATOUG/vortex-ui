import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VxLoaderComponent } from './vx-loader.component';

describe('VxLoaderComponent', () => {
  let component: VxLoaderComponent;
  let fixture: ComponentFixture<VxLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VxLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VxLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
