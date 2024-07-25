import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/Korisnik';
import { StavkaDostave } from '../models/StavkaDostave';
import { Restoran } from '../models/Restoran';
import { Dostava } from '../models/Dostava';
import { DostavaService } from '../services/dostava.service';
import { MeniService } from '../services/meni.service';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit{

  gost:Korisnik = new Korisnik();
  restoran:Restoran = new Restoran();
  stavke: StavkaDostave[] = [];

  constructor(private dostavaService: DostavaService,
    private meniService: MeniService
  ){}


  ngOnInit(): void {
    //localStorage.setItem("meni", JSON.stringify("gostKorpa"));
    //this.meniService.promenaKorisnika.emit(true);
    debugger;
    let temp1 = localStorage.getItem("korisnik");
    if(temp1!= null){
      this.gost = JSON.parse(temp1);
    }
    // dostavaRestoran
    let temp2 = localStorage.getItem("korpaRestoran");
    if(temp2!= null){
      this.restoran = JSON.parse(temp2);
    }
    let temp3 = localStorage.getItem("stavkeDostave");
    if(temp3!= null){
      this.stavke = JSON.parse(temp3);
    }
  }

  uvecaj(s:StavkaDostave): void{
    s.kolicina = s.kolicina+1;
    localStorage.setItem("stavkeDostave",JSON.stringify(this.stavke));
  }

  smanji(s:StavkaDostave): void{
    if (s.kolicina > 1) {
      s.kolicina = s.kolicina-1;
      localStorage.setItem("stavkeDostave",JSON.stringify(this.stavke));
    }
  }

  obrisi(s: StavkaDostave): void{
    this.stavke = this.stavke.filter(stavka => stavka !== s);
    localStorage.setItem("stavkeDostave", JSON.stringify(this.stavke));
    if (this.stavke.length == 0) {
      localStorage.removeItem("korpaRestoran");
    }
  }

  poruci():void{
    if (this.stavke.length == 0) {
      alert("Korpa je prazna");
    } else {
      let iznos = 0;
      for(let i = 0; i < this.stavke.length; i++){
        let temp = this.stavke[i];
        iznos = iznos + temp.jelovnik.cena * temp.kolicina;
      }
      const dostava: Dostava = {
        id: 0,
        idk: this.gost.id,
        restoran: this.restoran,
        datum: new Date(),
        iznos: iznos,
        vreme_dostave: "",
        status: "Z",
        stavke: this.stavke
      };
      this.dostavaService.kreirajDostavu(dostava).subscribe(()=>{
        alert("Zahtev za dostavu je uspesno kreiran");
        localStorage.removeItem("korpaRestoran");
        localStorage.removeItem("stavkeDostave");
        this.stavke = [];
      })
    }
  }

}
