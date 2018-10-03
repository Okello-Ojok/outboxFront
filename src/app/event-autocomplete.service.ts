import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import { EventsResponse, Events } from './events.model';


@Injectable({
  providedIn: 'root'
})
export class EventAutocompleteService {

  constructor(private http: HttpClient) { }

  // search(query: string): Observable<EventsResponse> {
  //   const url = 'http://localhost:3000/eventreg/';
  //   return this.http
  //   .get<EventsResponse>(url, {
  //     observe: 'response',
  //     params: {
  //       q: query,
  //       order: 'desc'
  //     }

  //   })
  //     .pipe(
  //       map(res => {
  //         return res.body;
  //       })
  //     );
  // }
}
