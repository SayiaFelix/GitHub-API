import { TestBed } from '@angular/core/testing';

import { GitHubRequestService } from './git-hub-request.service';

describe('GitHubRequestService', () => {
  let service: GitHubRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
