import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/Korisnik';
import { KorisnikService } from '../services/korisnik.service';
import { RestoranService } from '../services/restoran.service';
import { Restoran } from '../models/Restoran';
import { RezervacijaService } from '../services/rezervacija.service';
import { MeniService } from '../services/meni.service';

@Component({
  selector: 'app-pocetna-strana',
  templateUrl: './pocetna-strana.component.html',
  styleUrls: ['./pocetna-strana.component.css']
})
export class PocetnaStranaComponent implements OnInit{

  constructor(private korisnikService: KorisnikService, 
              private restoranService: RestoranService,
              private rezervacijaService: RezervacijaService,
              private meniService: MeniService
  ){}

  ukupnoRestorana: number = 0;
  ukupnoGosta: number = 0;
  ukupnoRezervacija1: number = 0;
  ukupnoRezervacija2: number = 0;
  ukupnoRezervacija3: number = 0;
  restorani: Restoran[] = [];
  restoran: Restoran = new Restoran();
//  sort1: String = "";
//  sort2: number = 0;

  ngOnInit(): void {
    // za heaeder
    localStorage.clear();
    localStorage.setItem("meni", JSON.stringify("pocetna"));
    this.meniService.promenaKorisnika.emit(true);

    this.restoranService.ukupnoRestorana().subscribe(d=>{
      this.ukupnoRestorana = d;
    });
    this.korisnikService.ukupnoGosta().subscribe(d=>{
      this.ukupnoGosta = d;
    });
    this.rezervacijaService.ukupnoRezervacija1().subscribe(d=>{
      this.ukupnoRezervacija1 = d;
    });
    this.rezervacijaService.ukupnoRezervacija2().subscribe(d=>{
      this.ukupnoRezervacija2 = d;
    });
    this.rezervacijaService.ukupnoRezervacija3().subscribe(d=>{
      this.ukupnoRezervacija3 = d;
    });
    this.restoranService.dohvatiRestorane().subscribe(d=>{
      this.restorani = d;
    });
  }

}
