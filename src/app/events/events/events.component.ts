import { Component, OnInit, ChangeDetectorRef, ViewChild, OnDestroy } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


import { Event } from '../../events.model';
import { Attendee } from '../../events.model';

import { EventsService } from '../../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];
  attendees: Attendee[]

  isLoading = false;
  
  // displayedColumns = ['eventname', 'eventDate', 'eventPaid', 'firstname', 'lastname', 'email', 'phone', 'actions'];

  displayedColumns = ['eventname', 'eventDate', 'eventPaid', 'facilitators', 'actions'];
  dataSource: MatTableDataSource<Event>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private eventsService: EventsService, private router: Router, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    
    this.isLoading = true;
    this.eventsService.getAllEvents()
      .subscribe(data => {
        this.isLoading = false;
        // this.attendees = data
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
        
      }, err => {
        console.log(err);
        
      });
      console.log(this.dataSource); 

      this.refreshTable()
  }

  // Filter table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  navigate(id){
  this.router.navigate(['/event-details/', id]);
  }

  onDelete(id: string){
    console.log('deleting');
    this.eventsService.deleteEvent(id)
    .subscribe(result => {
      this.refreshTable();
    });
    
  }

  refreshTable(){
    this.eventsService.getAllEvents()
    .subscribe(data => {
      this.events = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      this.changeDetectorRefs.detectChanges();
    })
  }
  




}
