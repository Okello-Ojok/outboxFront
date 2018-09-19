import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Resident } from '../residents';
import { ResidentsService } from '../residents.service';




@Component({
  selector: 'app-residents-list',
  templateUrl: './residents-list.component.html',
  styleUrls: ['./residents-list.component.css']
})
export class ResidentsListComponent implements OnInit {

  residents: Resident[];

  displayedColumns = ['name', 'username', 'email', 'phone', 'website', 'company.name', 'actions'];

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
