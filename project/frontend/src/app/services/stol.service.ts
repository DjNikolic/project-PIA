import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stol } from '../models/Stol';
import { Rezervacija } from '../models/Rezervacija';

@Injectable({
  providedIn: 'root'
})
export class StolService {

  constructor(private http: HttpClient) { }

  back = "http://localhost:8080";

  dohvatiStolove(r: Rezervacija) {
    debugger;
    return this.http.post<Stol[]>(`${this.back}/stol/dohvatiStolove`, r);
  }

  dohvatiSveElemente(idr: number) {
    debugger;
    return this.http.post<Stol[]>(`${this.back}/stol/dohvatiSveElemente`, idr);
  }
}
