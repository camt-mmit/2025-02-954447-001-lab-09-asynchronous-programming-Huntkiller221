import { TestBed } from '@angular/core/testing';
import { DynamicSectionDataService } from './dynamic-section-data.storage';

describe('DynamicSectionDataService', () => {
  let service: DynamicSectionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicSectionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
