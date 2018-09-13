import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  idType = [
    {id: 1, name: "National ID"},
    {id: 2, name: "Passport"},
    {id: 3, name: "Work ID"}
  ];

  residency = [
    {id: 1, type: "Individual"},
    {id: 2, type: "Company"}
  ];

  constructor() { }

  ngOnInit() {
  }

  

}
