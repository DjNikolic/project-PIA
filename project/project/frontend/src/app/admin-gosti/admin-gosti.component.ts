import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../models/Korisnik';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-gosti',
  templateUrl: './admin-gosti.component.html',
  styleUrls: ['./admin-gosti.component.css']
})
export class AdminGostiComponent implements OnInit {

  constructor(private korisnikService: KorisnikService){}
 
  gosti: Korisnik[] = [];
  boolean_izmena: boolean = false;


  ngOnInit(): void {
    this.korisnikService.dohvatiGoste().subscribe(d=>{
      this.gosti = d;
    });
  }

  gost_uzlov: number = 0;
  gost_azuriran: Korisnik = new Korisnik;
  opcije: any[] = [
    { name: "Odobren", code: "O" },
    { name: "Deaktiviran", code: "D" }
  ];

  azurirajGosta(gost: Korisnik): void{
    this.gost_uzlov = gost.id;
    this.gost_azuriran = {...gost};
  }

  potvrdiAzuriranjeGosta(azurirajGostaForma: NgForm): void{
    debugger;
    if (azurirajGostaForma.valid){
      debugger;
      this.korisnikService.azurirajKorisnika(this.gost_azuriran).subscribe(()=>{
        this.gost_uzlov = 0;
        this.gost_azuriran = new Korisnik;
        this.korisnikService.dohvatiGoste().subscribe(d=>{
          this.gosti = d;
        });
      });
    } else{
      alert("Forma nije dobro popunjena");
    }
  }

  otkaziAzuriranjeGosta():void{
    this.gost_azuriran = new Korisnik;
    this.gost_uzlov = 0;
  }
}
