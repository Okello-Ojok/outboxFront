import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.component.html',
  styleUrls: ['./admin-reg.component.css']
})
export class AdminRegComponent implements OnInit {

  show = true;
  hidden = true;

  idType = [
    {id: 1, name: "National ID"},
    {id: 2, name: "Passport"},
    {id: 3, name: "Work ID"}
  ]

  constructor() { }

  ngOnInit() {
  }

  showForm(){
    this.show = !this.show;
  }

}
