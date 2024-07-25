import { Component, OnInit } from '@angular/core';
import { Dostava } from '../models/Dostava';
import { Korisnik } from '../models/Korisnik';
import { DostavaService } from '../services/dostava.service';
import { MeniService } from '../services/meni.service';

@Component({
  selector: 'app-gost-dostava-hrane',
  templateUrl: './gost-dostava-hrane.component.html',
  styleUrls: ['./gost-dostava-hrane.component.css']
})
export class GostDostavaHraneComponent implements OnInit{

  constructor(private dostavaService: DostavaService,
              private meniService: MeniService
  ){}

  
 
  gotove_dostave: Dostava[] = [];
  pripremane_dostave: Dostava[] = [];
  gost: Korisnik = new Korisnik();
  

  ngOnInit(): void {
    debugger;
    let temp = localStorage.getItem("korisnik");
    this.meniService.promenaKorisnika.emit(true);
    if(temp!= null){
      this.gost = JSON.parse(temp);
    }
    localStorage.removeItem("stavkeDostave");
    this.dostavaService.dohvatiPripremaneDostave2(this.gost.id).subscribe((d1)=>{
      this.pripremane_dostave = d1;
    });
    this.dostavaService.dohvatiGotoveDostave(this.gost.id).subscribe((d2)=>{
      this.gotove_dostave = d2;
    });
  }

}
