import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {

  sex = null;
  gender = ["Male", "Female"];

  occupation = null;
  occupations = ["Student", "Proffessional", "Other"];

  role = null;
  roles = ["Attendee", "Facilitator"];

  constructor() { }

  ngOnInit() {
  }

}
