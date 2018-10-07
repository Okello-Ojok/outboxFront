import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


// import { Events } from '../../events';
import { Attendee } from '../../events.model';

import { EventsService } from '../../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  //events: Events[];
  attendees: Attendee[]
  isLoading = false;
  
  /// displayedColumns = ['eventname', 'eventDate', 'eventPaid', 'firstname', 'lastname', 'email', 'phone', 'actions'];

  displayedColumns = ['eventname', 'eventDate', 'eventPaid', 'facilitators', 'actions'];


  constructor(private eventsService: EventsService, private router: Router) { }

  ngOnInit() {

    this.eventsService.getAttendees()
      .subscribe(data => {
        this.attendees = data
        console.log(data);
        
      }, err => {
        console.log(err);
        
      });
      console.log(this.attendees);
  }

//   gotoEventDetails(url, id) {
//     this.router.navigate([url, id]).then( (e) => {
//       if (e) {
//         console.log("Navigation is successful!");
//       } else {
//         console.log("Navigation has failed!");
//       }
//     });
// }

}
