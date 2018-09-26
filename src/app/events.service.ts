import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";


import { Event } from './events.model';
import { Attendee } from './events.model';

//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  

  //events: Events[]
  private attendees: Attendee[];
  private events: Event[];
  

  // private uri = 'http://localhost:3000/eventreg/all/:get';

  private uri = 'http://localhost:3000/eventreg/';

  constructor(private http: HttpClient, private router: Router) { }

  getAttendees(): Observable<Attendee[]> {
    return this.http.get<Attendee[]>(this.uri)
  }


  addEvent(eventname: string, eventDate: Date, eventPaid: string, facilitators: string) {
    const event: Event = {
      id: null,
      eventname: eventname,
      eventDate: eventDate,
      eventPaid: eventPaid,
      facilitators: facilitators
    };
    this.http
      .post<{ message: string; eventId: string }>(
        "http://localhost:3000/eventreg/create-event/", event)
      .subscribe(responseData => {
        const id = responseData.eventId;
        event.id = id;
        this.events.push(event);
        // this.postsUpdated.next([...this.posts]);
        //this.router.navigate(["/"]);
      });
  }


  // updateEvent(id: string, eventname: string, eventDate: Date, eventPaid: string, facilitators: string) {
  //   const event: Event = { 
  //     id: id, 
  //     eventname: eventname,
  //     eventDate: eventDate,
  //     eventPaid: eventPaid,
  //     facilitators: facilitators
  //   };
  //   this.http
  //     .put("http://localhost:3000/api/posts/" + id, event)
  //     .subscribe(response => {
  //       const updatedPosts = [...this.posts];
  //       const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
  //       updatedPosts[oldPostIndex] = post;
  //       this.posts = updatedPosts;
  //       this.postsUpdated.next([...this.posts]);
  //       this.router.navigate(["/"]);
  //     });
  // }


}
