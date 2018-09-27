import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { Event } from '../../events.model';
import { Attendee } from '../../events.model';
import { EventsService } from '../../events.service';



@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  details: {};

  displayedColumns = ['firstname', 'lastname', 'email', 'phone', 'actions'];



  constructor(private router: Router, private route: ActivatedRoute,
    private eventsService: EventsService) { }

  ngOnInit() {
    this.getDetails(this.route.snapshot.params['id']);

  }

  getDetails(id) {
    this.eventsService.getDetails(id)
      .subscribe(data => {
        console.log(data);
        this.details = data;
      });
  }


}
