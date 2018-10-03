import { Component, OnInit } from '@angular/core';
import { Event } from '../../events.model';
import { Observable, observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

import { EventsService } from '../../events.service';
import { Attendee } from '../../events.model';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {

  events: Event[]
  sex = null;
  gender = ["Male", "Female"];

  occupation = null;
  occupations = ["Student", "Proffessional", "Other"];


  constructor(private eventsService: EventsService) { }


  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe(data => {
        this.events = data
        console.log(data);
        
      }, err => {
        console.log(err);
        
      });
      console.log(this.events);
   
  }
}
