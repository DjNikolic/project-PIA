import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dostava } from '../models/Dostava';

@Injectable({
  providedIn: 'root'
})
export class DostavaService {

  constructor(private http: HttpClient) { }

  back = "http://localhost:8080";
  
  kreirajDostavu(d: Dostava){
    return this.http.post(`${this.back}/dostava/kreirajDostavu`, d);
  }

  dohvatiNoveDostave(i: number){
    return this.http.post<Dostava[]>(`${this.back}/dostava/dohvatiNoveDostave`, i);
  }

  dohvatiPripremaneDostave(i: number){
    return this.http.post<Dostava[]>(`${this.back}/dostava/dohvatiPripremaneDostave`, i);
  }

  potvrdiDostavu(d: Dostava){
    return this.http.post(`${this.back}/dostava/potvrdiDostavu`, d);
  }

  odbijDostavu(d: Dostava){
    return this.http.post(`${this.back}/dostava/odbijDostavu`, d);
  }

  gotovaDostava(d: Dostava){
    return this.http.post(`${this.back}/dostava/gotovaDostava`, d);
  }

  dohvatiPripremaneDostave2(i: number){
    return this.http.post<Dostava[]>(`${this.back}/dostava/dohvatiPripremaneDostave2`, i);
  }

  dohvatiGotoveDostave(i: number){
    return this.http.post<Dostava[]>(`${this.back}/dostava/dohvatiGotoveDostave`, i);
  }
}
