import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
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
  dataSource: MatTableDataSource<Attendee>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private eventsService: EventsService, private router: Router) { }

  ngOnInit() {
    

    this.eventsService.getAttendees()
      .subscribe(data => {
        // this.attendees = data
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data);
        
      }, err => {
        console.log(err);
        
      });
      console.log(this.dataSource);

    
    
  }

  


  



}
