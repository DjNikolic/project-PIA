import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/Korisnik';
import { Restoran } from '../models/Restoran';
import { Jelovnik } from '../models/Jelovnik';
import { JelovnikService } from '../services/jelovnik.service';
import { RezervacijaService } from '../services/rezervacija.service';
import { Rezervacija } from '../models/Rezervacija';
import { StavkaDostave } from '../models/StavkaDostave';
import { Router } from '@angular/router';
import { MeniService } from '../services/meni.service';

@Component({
  selector: 'app-restoran',
  templateUrl: './restoran.component.html',
  styleUrls: ['./restoran.component.css']
})
export class RestoranComponent implements OnInit {

  gost:Korisnik = new Korisnik();
  restoran:Restoran = new Restoran();
  jelovnik: Jelovnik[] = [];
  rezervacija: Rezervacija = new Rezervacija();
  minDate: Date = new Date();
  stavke: StavkaDostave[] = [];
  kolicine: { [key: number]: number } = {};

  constructor(private jelovnikService: JelovnikService, 
              private rezervacijaService: RezervacijaService, 
              private router: Router,
              private meniService: MeniService
            ){}

  ngOnInit(): void {
    //localStorage.setItem("meni", JSON.stringify("gostRestoran"));
    //this.meniService.promenaKorisnika.emit(true);
    let temp1 = localStorage.getItem("korisnik");
    if(temp1!= null){
      this.gost = JSON.parse(temp1);
    }
    let temp2 = localStorage.getItem("restoran");
    if(temp2!= null){
      this.restoran = JSON.parse(temp2);
    }
    this.jelovnikService.dohvatiJelovnik(this.restoran.id).subscribe((d)=>{
      this.jelovnik = d;
    });
    let temp3 = localStorage.getItem("stavkeDostave");
    if(temp3!= null){
      this.stavke = JSON.parse(temp3);
    } else {
      this.stavke = [];
    }
  }

  rezervisi(): void {
    debugger;
    if(this.rezervacija.broj_mesta == null || this.rezervacija.broj_mesta == 0){
      alert("Morate uneto broj osoba");
      return;
    }
    this.rezervacija.idk = this.gost.id;
    this.rezervacija.restoran = this.restoran;
    this.rezervacija.kraj = new Date(this.rezervacija.pocetak);
    this.rezervacija.kraj.setHours(this.rezervacija.kraj.getHours() + 3);
    debugger;
    this.rezervacijaService.dodajRezervaciju(this.rezervacija).subscribe(d=>{
      alert(d);
    });
  }

  dodajUKorpu(j: Jelovnik): void{
    if(this.kolicine[j.id] == null){
      alert("Niste uneli kolicinu");
      return;
    }
    debugger;
    let temp2 = localStorage.getItem("korpaRestoran");
    if(temp2!= null){
      let restoran2 = JSON.parse(temp2);
      if(restoran2.id != this.restoran.id){
        alert("U korpi su jela drugog restorana, ne mozete dodati jelo u korpu");
        return;
      }
    } 
    debugger;
    const kolicina = this.kolicine[j.id] || 1;
    const novaStavka: StavkaDostave = {
      id: 0,
      idd: 0,
      jelovnik: j,
      kolicina: kolicina
    };
    this.stavke.push(novaStavka);
    localStorage.removeItem("korpaRestoran");
    localStorage.setItem("korpaRestoran",JSON.stringify(this.restoran));
    localStorage.removeItem("stavkeDostave");
    localStorage.setItem("stavkeDostave",JSON.stringify(this.stavke));
    alert("Jelo je dodato u korpu");
    debugger;
  }

}
