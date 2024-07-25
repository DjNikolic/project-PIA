import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlikaService {

  constructor(private http: HttpClient) { }

  back = "http://localhost:8080";

  ubaciSliku(s: File, k: String){
    const formData: FormData = new FormData();
    debugger;
    formData.append('file', s, s.name);
    formData.append('k', k.toString());
    debugger;
    return this.http.post(`${this.back}/slika/ubaciSliku`, formData);
  }

  obrisiSliku(k1: String, k2: String){
    debugger;
    let temp = k1.toString() + k2.toString();
    debugger;
    return this.http.post(`${this.back}/slika/obrisiSliku`, temp);
  }
}
