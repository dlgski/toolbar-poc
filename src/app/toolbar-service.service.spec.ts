import { TestBed, inject } from '@angular/core/testing';

import { ToolbarServiceService } from './toolbar.service.ts';

describe('ToolbarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolbarServiceService]
    });
  });

  it('should ...', inject([ToolbarServiceService], (service: ToolbarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
