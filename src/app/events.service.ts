import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from './events';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EventsService {

  uri = 'http://localhost:3000/events/all/:get';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Events[]>{
    return this.http.get<Events[]>(this.uri)
  }



}
