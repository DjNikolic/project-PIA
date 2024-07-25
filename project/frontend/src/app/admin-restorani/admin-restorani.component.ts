import { Component, OnInit } from '@angular/core';
import { RestoranService } from '../services/restoran.service';
import { Restoran } from '../models/Restoran';
import { DvaDatuma } from '../models/DvaDatuma';

@Component({
  selector: 'app-admin-restorani',
  templateUrl: './admin-restorani.component.html',
  styleUrls: ['./admin-restorani.component.css']
})
export class AdminRestoraniComponent implements OnInit {

  constructor(private restoranService: RestoranService){}
 

  restorani: Restoran[] = [];
  idr: number = 0;
  dan_u_nedelji: number = 0;
  dvaDatuma: DvaDatuma = new DvaDatuma();
  pocetakSati: number = 0;
  pocetakMinuti: number = 0;
  krajSati: number = 0;
  krajMinuti: number = 0;
  
  uslov: boolean = false;
  opcije: any[]=[
    { name: "Ponedeljak", code: 1 },
    { name: "Utorak", code: 2 },
    { name: "Sreda", code: 3 },
    { name: "Cetvrtak", code: 4 },
    { name: "Petak", code: 5 },
    { name: "Subota", code: 6 },
    { name: "Nedelja", code: 7 }
  ];
  


  ngOnInit(): void {
    this.restoranService.dohvatiRestorane().subscribe(d=>{
      this.restorani = d;
    }) 
  }

  izaberi(){
    if(this.idr == 0){
      alert("Niste izabrali restoran");
      return;
    }
    if(this.dan_u_nedelji == 0){
      alert("Niste izabrali dan");
      return;
    }
    this.restoranService.dohvatiRadnoVreme(this.idr, this.dan_u_nedelji).subscribe((d)=>{
      this.dvaDatuma = d;
      this.uslov = true;
      debugger;
    }); 
  }

  potvrdi(){
    if(this.pocetakSati > this.krajSati || this.pocetakSati == this.krajSati && this.pocetakMinuti > this.krajMinuti){
      alert("Kraj radnog vremena mora biti posle pocetka radnog vremena");
      return;
    }
    this.restoranService.azurirajRadnoVreme(this.pocetakSati, this.pocetakMinuti, this.krajSati, this.krajMinuti, this.dvaDatuma.postoji, this.idr, this.dan_u_nedelji).subscribe(()=>{
      alert("Radno vreme je uspesno azurirano");
      this.uslov = false;
      this.idr = 0;
      this.dan_u_nedelji = 0;
      this.pocetakSati= 0;
      this.pocetakMinuti = 0;
      this.krajSati = 0;
      this.krajMinuti = 0;
    });
  }

}
