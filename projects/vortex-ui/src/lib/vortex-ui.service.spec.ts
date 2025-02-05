import { TestBed } from '@angular/core/testing';

import { VortexUiService } from './vortex-ui.service';

describe('VortexUiService', () => {
  let service: VortexUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VortexUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
