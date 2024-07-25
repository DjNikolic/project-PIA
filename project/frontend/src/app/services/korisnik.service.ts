import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from '../models/Korisnik';
import { Observable, map } from 'rxjs';
import { KonobarRestoran } from '../models/KonobarRestoran';
import { Zaposlen } from '../models/Zaposlen';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  back = "http://localhost:8080";
  

  registracija(k: Korisnik): Observable<string>{ 
    debugger;
    return this.http.post(`${this.back}/korisnik/registracija`, k, { responseType: 'text' });
  }

  prijava(k: Korisnik){
    return this.http.post<Korisnik>(`${this.back}/korisnik/prijava`, k);
  }

  promeniLozinku(k: String, l: String){
    const data = {
      korisnicko_ime: k,
      lozinka: l
    };
    return this.http.post<number>(`${this.back}/korisnik/promeniLozinku`, data);
  }

  dohvatiKorisnika(s: String){
    return this.http.post<Korisnik>(`${this.back}/korisnik/dohvatiKorisnika`, s);
  }

  prijavaAdmin(k: Korisnik){
    return this.http.post<Korisnik>(`${this.back}/korisnik/prijavaAdmin`, k);
  }

  ukupnoGosta(){
    return this.http.get<number>(`${this.back}/korisnik/ukupnoGosta`);
  }

  dohvatiKorisnike(){
    return this.http.get<Korisnik[]>(`${this.back}/korisnik/dohvatiKorisnike`);
  }

  dohvatiZahteve(){
    return this.http.get<Korisnik[]>(`${this.back}/korisnik/dohvatiZahteve`);
  }

  azurirajKorisnika(k: Korisnik){
    return this.http.post<number>(`${this.back}/korisnik/azurirajKorisnika`, k);
  }

  dohvatiMestoZaposlenja(k: Korisnik){
    return this.http.post<number>(`${this.back}/korisnik/dohvatiMestoZaposlenja`, k);
  }

  dohvatiKonobare(){
    return this.http.get<KonobarRestoran[]>(`${this.back}/korisnik/dohvatiKonobare`);
  }

  dohvatiGoste(){
    return this.http.get<Korisnik[]>(`${this.back}/korisnik/dohvatiGoste`);
  }

  registracijaKonobar(k: KonobarRestoran): Observable<string>{ 
    debugger;
    return this.http.post(`${this.back}/korisnik/registracijaKonobar`, k, { responseType: 'text' });
  }

  odobriZahtev(k: number){
    return this.http.post(`${this.back}/korisnik/odobriZahtev`, k);
  }

  odbijZahtev(k: number){
    return this.http.post(`${this.back}/korisnik/odbijZahtev`, k);
  }

  azurirajMestoZaposlenja(k: KonobarRestoran){
    return this.http.post(`${this.back}/korisnik/azurirajMestoZaposlenja`, k);
  }



}
