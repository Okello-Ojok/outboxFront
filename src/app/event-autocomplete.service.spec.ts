import { TestBed, inject } from '@angular/core/testing';

import { EventAutocompleteService } from './event-autocomplete.service';

describe('EventAutocompleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventAutocompleteService]
    });
  });

  it('should be created', inject([EventAutocompleteService], (service: EventAutocompleteService) => {
    expect(service).toBeTruthy();
  }));
});
