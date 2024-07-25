import { Component, OnInit } from '@angular/core';
import { RestoranService } from '../services/restoran.service';
import { Router } from '@angular/router';
import { Restoran } from '../models/Restoran';
import { MeniService } from '../services/meni.service';

@Component({
  selector: 'app-gost-restorani',
  templateUrl: './gost-restorani.component.html',
  styleUrls: ['./gost-restorani.component.css']
})
export class GostRestoraniComponent implements OnInit{

  constructor(
      private restoranService: RestoranService,
      private router: Router,
      private meniService: MeniService
  ){}


  restorani: Restoran[] = [];
  restoran: Restoran = new Restoran();
  sort1: String = "";
  sort2: number = 0;


  ngOnInit(): void {
    localStorage.setItem("meni", JSON.stringify("gost"));
    this.meniService.promenaKorisnika.emit(true);
    // uklanjamo resotran iz localStorage-a
    localStorage.removeItem("restoran");
    this.meniService.promenaKorisnika.emit(true);
    this.restoranService.dohvatiRestorane().subscribe(d=>{
      this.restorani = d;
    });
  }

  pretrazi(): void{
    this.restoranService.dohvatiRestorane2(this.restoran).subscribe(d=>{
      this.restorani = d;
    });
  }

  sortiraj():void{
    this.restorani.sort((d1,d2)=>{
      if(this.sort2 == 0){
        if(this.sort1 == "naziv"){  // naziv asc
          return d1.naziv.localeCompare(String(d2.naziv));
        } else if (this.sort1 == "adresa"){  // adresa asc
          return d1.adresa.localeCompare(String(d2.adresa));
        } else {  //tip asc
          return d1.tip.localeCompare(String(d2.tip));
        }
      } else {
        if(this.sort1 == "naziv"){  // naziv desc
          return d2.naziv.localeCompare(String(d1.naziv));
        } else if (this.sort1 == "adresa"){  // adresa desc
          return d2.adresa.localeCompare(String(d1.adresa));
        } else {  //tip desc
          return d2.tip.localeCompare(String(d1.tip));
        }
      }
    });
  }

  otvoriRestoran(r: Restoran){
    //localStorage.removeItem("restoran");
    localStorage.setItem("restoran",JSON.stringify(r));
    this.router.navigate(['restoran']);
  }

}
