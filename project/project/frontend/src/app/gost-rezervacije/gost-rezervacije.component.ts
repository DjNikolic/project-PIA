import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { RestoranService } from '../services/restoran.service';
import { Router } from '@angular/router';
import { DostavaService } from '../services/dostava.service';
import { SlikaService } from '../services/slika.service';
import { RezervacijaService } from '../services/rezervacija.service';
import { MeniService } from '../services/meni.service';
import { Restoran } from '../models/Restoran';
import { Korisnik } from '../models/Korisnik';
import { Rezervacija } from '../models/Rezervacija';

@Component({
  selector: 'app-gost-rezervacije',
  templateUrl: './gost-rezervacije.component.html',
  styleUrls: ['./gost-rezervacije.component.css']
})
export class GostRezervacijeComponent  implements OnInit{

  constructor(private rezervacijaService: RezervacijaService){}

  
  gost: Korisnik = new Korisnik();
  aktivne_rezervacije: Rezervacija[] = [];
  arhivirane_rezervacije: Rezervacija[] = [];
  

  ngOnInit(): void {
    debugger;
    let temp = localStorage.getItem("korisnik");
    if(temp!= null){
      this.gost = JSON.parse(temp);
      // treca stavka
      debugger;
      this.rezervacijaService.dohvatiAktivneRezervacije(this.gost.id).subscribe((d)=>{
        debugger;
        this.aktivne_rezervacije = d;
      });
      this.rezervacijaService.dohvatiArhiviraneRezervacije(this.gost.id).subscribe((d)=>{
        this.arhivirane_rezervacije = d;
      });
    }
  }

}
