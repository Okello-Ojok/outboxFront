import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { ENV } from './env.config';
import { map, tap } from 'rxjs/operators';
import { Router } from "@angular/router";


import { Event } from './events.model';
import { Attendee } from './events.model';

//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {



  //events: Events[]
  private attendees: Attendee[]=[];
  private events: Event[]=[];



  // private uri = 'http://localhost:3000/eventreg/all/:get';

  private uri = 'http://localhost:3000/eventreg/';

  constructor(private http: HttpClient, private router: Router) { }

  getAttendees(): Observable<Attendee[]> {
    return this.http.get<Attendee[]>('http://localhost:3000/eventreg/')
  }


  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:3000/eventreg/five')
  }

  getDetails(id: string): Observable<Attendee[]> {
    return this.http.get<Attendee[]>('http://localhost:3000/eventreg/all/:get')

  }


  getEvent(id: string) {
    return this.http.get<{ _id: string; eventname: string; eventDate: Date; eventPaid: string; facilitators: string }>(
      "http://localhost:3000/eventreg/edit-event/" + id
    );
  }



  // GET an event by ID
  getEventById(id: string): Observable<Event> {
    return this.http
      .get<Event>("http://localhost:3000/eventreg/event/" + id)
      .pipe(catchError((error, caught) => {
        console.log('Error Occurred');
        console.log(error);
        return Observable.throw(error);
      })) as any;
  }

  // GET Attendees by event ID
  getAttendeesByEventId(eventId: string): Observable<Attendee[]> {
    return this.http
      .get<Attendee[]>(`${'http://localhost:3000/eventreg/'}event/${eventId}/attendees`)
      .pipe(catchError((error, caught) => {
        console.log('Error Occurred');
        console.log(error);
        return Observable.throw(error);
      })) as any;
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
        // this.eventsUpdated.next([...this.events]);
        this.router.navigate(["/events"]);
      });
  }


  updateEvent(id: string, eventname: string, eventDate: Date, eventPaid: string, facilitators: string) {
    const event: Event = {
      id: id,
      eventname: eventname,
      eventDate: eventDate,
      eventPaid: eventPaid,
      facilitators: facilitators
    };
    this.http
      .put("http://localhost:3000/eventreg/edit-event/" + id, event)
      .subscribe(response => {
        const updatedEvents = [...this.events];
        const oldEventIndex = updatedEvents.findIndex(e => e.id === event.id);
        updatedEvents[oldEventIndex] = event;
        this.events = updatedEvents;
        // this.postsUpdated.next([...this.posts]);
        this.router.navigate(["/"]);
      });
  }



  addAttendee(firstname: string, lastname: string, email: string, phone: string, gender: string, occupation: string) {
    const attendee: Attendee = {
      id: null,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      gender: gender,
      occupation: occupation
      // eventAtt: eventAtt
    };
    this.http
      .post<{ message: string; attendeeId: string }>(
        "http://localhost:3000/eventreg/event-attendee/", attendee)
      .subscribe(responseData => {
        const id = responseData.attendeeId;
        attendee.id = id;
        this.attendees.push(attendee);
        //  alert(responseData.message);
        // this.eventsUpdated.next([...this.events]);
        // this.router.navigate(["/events"]);
      });
  }





  updateAttendee(id: string, firstname: string, lastname: string, email: string, phone: string, gender: string, occupation: string) {
    const attendee: Attendee = {
      id: id,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      gender: gender,
      occupation: occupation

    };
    this.http
      .put("http://localhost:3000/eventreg/event-attendee/" + id, attendee)
      .subscribe(response => {
        const updatedAttendees = [...this.attendees];
        const oldAttendeeIndex = updatedAttendees.findIndex(e => e.id === attendee.id);
        updatedAttendees[oldAttendeeIndex] = attendee;
        this.attendees = updatedAttendees;
        // this.postsUpdated.next([...this.posts]);
        this.router.navigate(["/"]);
      });
  }


  getAttendee(id: string) {
    return this.http.get<Attendee>(
      "http://localhost:3000/eventreg/event-attendee/" + id
    );
  }





  // POST new attendee
  postAttendee(attendee: Attendee): Observable<Attendee> {
    return this.http
      .post<Attendee>("http://localhost:3000/eventreg/event-attendee/", attendee)
      .pipe(catchError((error, caught) => {
        console.log('Error Occurred');
        console.log(error);
        return Observable.throw(error);
      })) as any;
  }

}
