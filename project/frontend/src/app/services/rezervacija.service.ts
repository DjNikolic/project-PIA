import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rezervacija } from '../models/Rezervacija';
import { Observable } from 'rxjs';
import { Statistika1 } from '../models/Statistika1';
import { Statistika2 } from '../models/Statistika2';
import { Statistika3 } from '../models/Statistika3';

@Injectable({
  providedIn: 'root'
})
export class RezervacijaService {

  constructor(private http: HttpClient) { }

  back = "http://localhost:8080";
  

  dodajRezervaciju(r: Rezervacija): Observable<string>{
    debugger;
    return this.http.post(`${this.back}/rezervacija/dodajRezervaciju`, r, { responseType: 'text' });
  }

  ukupnoRezervacija1(){
    return this.http.get<number>(`${this.back}/rezervacija/ukupnoRezervacija1`);
  }

  ukupnoRezervacija2(){
    return this.http.get<number>(`${this.back}/rezervacija/ukupnoRezervacija2`);
  }

  ukupnoRezervacija3(){
    return this.http.get<number>(`${this.back}/rezervacija/ukupnoRezervacija3`);
  }

  dohvatiZahteveRezervacija(r: number) {
    debugger;
    return this.http.post<Rezervacija[]>(`${this.back}/rezervacija/dohvatiZahteveRezervacija`, r);
  }

  prihvatiRezervaciju(r: Rezervacija){
    return this.http.post(`${this.back}/rezervacija/prihvatiRezervaciju`, r);
  }

  odbijRezervaciju(r: Rezervacija){
    return this.http.post(`${this.back}/rezervacija/odbijRezervaciju`, r);
  }

  dohvatiRezervacijeKonobar(k: number) {
    debugger;
    return this.http.post<Rezervacija[]>(`${this.back}/rezervacija/dohvatiRezervacijeKonobar`, k);
  }

  dosaoGost(r: number){
    return this.http.post(`${this.back}/rezervacija/dosaoGost`, r);
  }

  nijeDosaoGost(r: number){
    return this.http.post(`${this.back}/rezervacija/nijeDosaoGost`, r);
  }

  dohvatiAktivneRezervacije(g: number){
    return this.http.post<Rezervacija[]>(`${this.back}/rezervacija/dohvatiAktivneRezervacije`, g);
  }

  dohvatiArhiviraneRezervacije(g: number){
    return this.http.post<Rezervacija[]>(`${this.back}/rezervacija/dohvatiArhiviraneRezervacije`, g);
  }

  dohvatiStatistiku1(k: number){
    return this.http.post<Statistika1>(`${this.back}/rezervacija/dohvatiStatistiku1`, k);
  }

  dohvatiStatistiku2(r: number){
    return this.http.post<Statistika2>(`${this.back}/rezervacija/dohvatiStatistiku2`, r);
  }

  dohvatiStatistiku3(k: number){
    return this.http.post<Statistika3>(`${this.back}/rezervacija/dohvatiStatistiku3`, k);
  }
  
}
