import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restoran } from '../models/Restoran';
import { RadnoVreme } from '../models/RadnoVreme';
import { DvaDatuma } from '../models/DvaDatuma';

@Injectable({
  providedIn: 'root'
})
export class RestoranService {

  constructor(private http: HttpClient) { }

  back = "http://localhost:8080";

  ukupnoRestorana(){
    return this.http.get<number>(`${this.back}/restoran/ukupnoRestorana`);
  }

  dohvatiRestorane(){
    return this.http.get<Restoran[]>(`${this.back}/restoran/dohvatiRestorane`);
  }

  dohvatiRestorane2(r: Restoran){
    return this.http.post<Restoran[]>(`${this.back}/restoran/dohvatiRestorane2`, r);
  }

  dodajRestoran(s: File, r: Restoran){
    const formData: FormData = new FormData();
    debugger;
    formData.append('stolovi', s, s.name);
    formData.append('naziv', r.naziv.toString());
    formData.append('adresa', r.adresa.toString());
    formData.append('tip', r.tip.toString());
    formData.append('opis', r.opis.toString());
    formData.append('telefon', r.telefon.toString());
    debugger;
    return this.http.post(`${this.back}/restoran/dodajRestoran`, formData);
  }

  dohvatiRadnoVreme(idr: number, dan_u_nedelji: number){
    const formData: FormData = new FormData();
    debugger;
    formData.append('idr', idr.toString());
    formData.append('dan_u_nedelji', dan_u_nedelji.toString());
    debugger;
    return this.http.post<DvaDatuma>(`${this.back}/restoran/dohvatiRadnoVreme`, formData);
  }

  azurirajRadnoVreme(ps: number, pm: number, ks: number, km: number, postoji: number, idr: number, dan_u_nedelji: number){
    const formData: FormData = new FormData();
    debugger;
    formData.append('ps', ps.toString());
    formData.append('pm', pm.toString());
    formData.append('ks', ks.toString());
    formData.append('km', km.toString());
    formData.append('postoji', postoji.toString());
    formData.append('idr', idr.toString());
    formData.append('dan_u_nedelji', dan_u_nedelji.toString());
    debugger;
    return this.http.post(`${this.back}/restoran/azurirajRadnoVreme`, formData);
  }

}
