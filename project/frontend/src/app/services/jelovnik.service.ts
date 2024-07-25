import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jelovnik } from '../models/Jelovnik';

@Injectable({
  providedIn: 'root'
})
export class JelovnikService {

  constructor(private http: HttpClient) { }

  back = "http://localhost:8080";

  dohvatiJelovnik(i: number){
    return this.http.post<Jelovnik[]>(`${this.back}/jelovnik/dohvatiJelovnik`, i);
  }

}
