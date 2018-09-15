import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resident } from './residents';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidentsService {

  private uri = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getResidents(): Observable<Resident[]>{
    return this.http.get<Resident[]>(this.uri);
  }
}

