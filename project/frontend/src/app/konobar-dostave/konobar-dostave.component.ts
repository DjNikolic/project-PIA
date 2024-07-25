import { Component, OnInit } from '@angular/core';
import { Dostava } from '../models/Dostava';
import { KorisnikService } from '../services/korisnik.service';
import { DostavaService } from '../services/dostava.service';
import { Korisnik } from '../models/Korisnik';

@Component({
  selector: 'app-konobar-dostave',
  templateUrl: './konobar-dostave.component.html',
  styleUrls: ['./konobar-dostave.component.css']
})
export class KonobarDostaveComponent implements OnInit{

  constructor(private korisnikService: KorisnikService,
    private dostavaService: DostavaService
  ){}


  nove_dostave: Dostava[] = [];
  pripremane_dostave: Dostava[] = [];
  konobar: Korisnik = new Korisnik();
  idr: number = 0;
  opcije: any[] = [
    { name: "20-30 minuta", code: "20-30 minuta" },
    { name: "30-40 minuta", code: "30-40 minuta" },
    { name: "50-60 minuta", code: "50-60 minuta" }
  ];

  ngOnInit(): void {
    // prva stavka
    let temp = localStorage.getItem("korisnik");
    if(temp!= null){
      this.konobar = JSON.parse(temp);
    }
    this.korisnikService.dohvatiMestoZaposlenja(this.konobar).subscribe((d)=>{
      this.idr = d;

      // treca stavka
      this.dostavaService.dohvatiNoveDostave(this.idr).subscribe((d1)=>{
        this.nove_dostave = d1;
      });
      this.dostavaService.dohvatiPripremaneDostave(this.idr).subscribe((d2)=>{
        this.pripremane_dostave = d2;
      });
    });
  }

  potvrdiDostavu(d: Dostava): void{
    if(d.vreme_dostave != null && d.vreme_dostave != ""){
      this.dostavaService.potvrdiDostavu(d).subscribe(()=>{
        this.dostavaService.dohvatiNoveDostave(this.idr).subscribe((d)=>{
          this.nove_dostave = d;
        })
        this.dostavaService.dohvatiPripremaneDostave(this.idr).subscribe((d)=>{
          this.pripremane_dostave = d;
        })
      });
    } else {
      alert("Morate izabrati vreme dostave");
    }
    
    
  }

  odbijDostavu(d: Dostava): void{
    this.dostavaService.odbijDostavu(d).subscribe(()=>{
      this.dostavaService.dohvatiNoveDostave(this.idr).subscribe((d)=>{
        this.nove_dostave = d;
      })
    });
  }

  gotovaDostava(d: Dostava): void{
    this.dostavaService.gotovaDostava(d).subscribe(()=>{
      this.dostavaService.dohvatiNoveDostave(this.idr).subscribe((d)=>{
        this.nove_dostave = d;
      })
      this.dostavaService.dohvatiPripremaneDostave(this.idr).subscribe((d)=>{
        this.pripremane_dostave = d;
      })
    });
  }

}
