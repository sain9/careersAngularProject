import { TestBed } from '@angular/core/testing';

import { AddedprofileService } from './addedprofile.service';

describe('AddedprofileService', () => {
  let service: AddedprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddedprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
