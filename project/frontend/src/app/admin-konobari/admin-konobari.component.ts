import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { RestoranService } from '../services/restoran.service';
import { KonobarRestoran } from '../models/KonobarRestoran';
import { Restoran } from '../models/Restoran';
import { NgForm } from '@angular/forms';
import { Korisnik } from '../models/Korisnik';

@Component({
  selector: 'app-admin-konobari',
  templateUrl: './admin-konobari.component.html',
  styleUrls: ['./admin-konobari.component.css']
})
export class AdminKonobariComponent implements OnInit {

  constructor(private korisnikService: KorisnikService,
              private restoranService: RestoranService
            ){}
 
  
  konobari: KonobarRestoran[] = [];
  restorani: Restoran[] = [];
  konobar_uzlov: number = 0;
  konobar_azuriran: KonobarRestoran = new KonobarRestoran;
  opcije: any[] = [
    { name: "Odobren", code: "O" },
    { name: "Deaktiviran", code: "D" }
  ];


  ngOnInit(): void {
    debugger;
    this.korisnikService.dohvatiKonobare().subscribe(d=>{
      this.konobari = d;
    });
    this.restoranService.dohvatiRestorane().subscribe(d=>{
      this.restorani = d;
    }); 
    debugger;
  }

  azurirajKonobara(konobar: Korisnik, restoran: Restoran): void{
    this.konobar_uzlov = konobar.id;
    this.konobar_azuriran.konobar = {...konobar};
    this.konobar_azuriran.restoran = {...restoran};
  }

  // moram da dodam novi model
  potvrdiAzuriranjeKonobara(konobarForma: NgForm): void{
    debugger;
    if (konobarForma.valid){
      debugger;
      this.korisnikService.azurirajKorisnika(this.konobar_azuriran.konobar).subscribe(()=>{
        // ovde dodajemo zahtev
        this.korisnikService.azurirajMestoZaposlenja(this.konobar_azuriran).subscribe(()=>{
          this.konobar_uzlov = 0;
          this.konobar_azuriran = new KonobarRestoran();
          this.korisnikService.dohvatiKonobare().subscribe(d=>{
            this.konobari = d;
          });
        })
      });
    } else{
      alert("Forma nije dobro popunjena");
    }
  }

  otkaziAzuriranjeKonobara():void{
    this.konobar_azuriran = new KonobarRestoran;
    this.konobar_uzlov = 0;
  }


}
