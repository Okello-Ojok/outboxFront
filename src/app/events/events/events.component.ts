import { Component, OnInit } from '@angular/core';
import { Events } from '../../events';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Events[];

  displayedColumns = ['eventname', 'eventDate', 'eventPaid', 'firstname', 'lastname', 'email', 'phone', 'actions'];

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
