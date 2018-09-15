import { Component, OnInit } from '@angular/core';
import { ResidentsService } from '../residents.service';
import { Resident } from '../residents';

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

  // public residents = [];
  residents: Resident[];

  constructor(private residentsService: ResidentsService) { }

  ngOnInit() {
    this.residentsService.getResidents()
        .subscribe(data => {
          this.residents = data
          console.log(data)
        }, err=>{
          console.log(err)
        });
        console.log(this.residents);
        
  }

  
}
