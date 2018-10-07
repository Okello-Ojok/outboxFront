import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Event } from '../../events.model';
import { Observable, observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


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

  isLoading = false;
  attendee: Attendee;
  private mode = "create";
  private attendeeID: string;

  occupation = null;
  occupations = ["Student", "Proffessional", "Other"];


  constructor(private eventsService: EventsService, public route: ActivatedRoute) { }


  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe(data => {
        this.events = data
        console.log(data);

      }, err => {
        console.log(err);

      });
    console.log(this.events);

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('attendeeID')) {
        this.mode = 'edit';
        this.attendeeID = paramMap.get('attendeeID');
        this.isLoading = true;
        this.eventsService.getAttendee(this.attendeeID).subscribe(attendeeData => {
          this.isLoading = false;
          this.attendee = {id: attendeeData.id, firstname: attendeeData.firstname, lastname: attendeeData.lastname, email: attendeeData.email, phone: attendeeData.phone, gender: attendeeData.gender, occupation: attendeeData.occupation};
        })

      } else{
        this.mode = 'create';
        this.attendeeID = null;
      }

    });


    

  }


  onAddAttendee(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.eventsService.addAttendee(form.value.firstname, form.value.lastname, form.value.email, form.value.phone, form.value.gender, form.value.occupation);
    } 
    // else {
    //   this.eventsService.updateAttendee(
    //     this.eventID,
    //     form.value.eventname, 
    //     form.value.eventDate, 
    //     form.value.payment, 
    //     form.value.facilitators
    //   );
    // }
    form.resetForm();
  }
}
