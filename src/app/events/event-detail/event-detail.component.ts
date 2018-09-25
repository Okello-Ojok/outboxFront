import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { switchMap } from 'rxjs/operators';
//import { Events } from '../../events';
import { EventsService } from '../../events.service';



@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  //event$: Observable<Events[]>  
  event$: Object;


  constructor(private router: Router, private route: ActivatedRoute, 
              private eventsService: EventsService) { }

  ngOnInit() {
    
  }


}
