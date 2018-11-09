import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';


import { Event } from '../../../events.model';
import { Attendee } from '../../../events.model';
import { EventsService } from '../../../events.service';



@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
 


  details: Attendee[];
  isLoading= false;

  displayedColumns = ['firstname', 'lastname', 'email', 'gender', 'occupation', 'phone',];
  dataSource: MatTableDataSource<Attendee>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private router: Router, private route: ActivatedRoute,
    private eventsService: EventsService) { }

  ngOnInit() {
    
    this.getDetails(this.route.snapshot.params['id']);

  }

  getDetails(id) {
    // this.isLoading = true;
    this.eventsService.getAttendeesByEventId(id)
      .subscribe(data => {
        // this.isLoading = false;
        // console.log(data);
        // this.details = data;
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.sort = this.sort;
      });
  }

  // Filter table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
