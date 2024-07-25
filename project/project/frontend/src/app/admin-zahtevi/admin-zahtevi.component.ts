import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../models/Korisnik';

@Component({
  selector: 'app-admin-zahtevi',
  templateUrl: './admin-zahtevi.component.html',
  styleUrls: ['./admin-zahtevi.component.css']
})
export class AdminZahteviComponent implements OnInit {

  constructor(private korisnikService: KorisnikService){}
 
  zahtevi: Korisnik[] = [];


  ngOnInit(): void {
    this.korisnikService.dohvatiZahteve().subscribe(d=>{
      this.zahtevi = d;
    });
  }

  odobriZahtev(idk: number){
    this.korisnikService.odobriZahtev(idk).subscribe(()=>{
      this.korisnikService.dohvatiZahteve().subscribe(d=>{
        this.zahtevi = d;
      });
    });
  }

  odbijZahtev(idk: number){
    this.korisnikService.odbijZahtev(idk).subscribe(()=>{
      this.korisnikService.dohvatiZahteve().subscribe(d=>{
        this.zahtevi = d;
      });
    });
  }

}
