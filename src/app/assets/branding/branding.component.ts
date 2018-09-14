import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.css']
})
export class BrandingComponent implements OnInit {
  condition = null;
  conditions = ['Good', 'Very Good', 'Poor', 'Very Poor'];
  constructor() { }

  ngOnInit() {
  }

}
