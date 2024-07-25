import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../services/korisnik.service';
import { NgForm } from '@angular/forms';
import { Korisnik } from '../models/Korisnik';

@Component({
  selector: 'app-promena-lozinke',
  templateUrl: './promena-lozinke.component.html',
  styleUrls: ['./promena-lozinke.component.css']
})
export class PromenaLozinkeComponent {

  constructor(private router: Router, private korisnikService: KorisnikService){}

  korisnik: Korisnik = new Korisnik();
  lozinka_nova1: String = "";
  lozinka_nova2: String = "";

  potvrdi(forma: NgForm): void{
    if(this.korisnik.lozinka == ""){
      this.korisnikService.dohvatiKorisnika(this.korisnik.korisnicko_ime).subscribe(d=>{
        if (d == null) {
          alert("Pogresno ste uneli korisnicko ime");
          return;
        }
        localStorage.removeItem("korisnik");
        localStorage.setItem("korisnik",JSON.stringify(d));
        this.router.navigate(['promenaLozinke2']);
      });
    }
    else{   // lozinka stata je uneta
      this.korisnikService.prijava(this.korisnik).subscribe(d=>{
        if(d == null){
          alert("Pogresno ste uneli staru lozinku");
          return;
        }
        if(this.lozinka_nova1 == ""){
          alert("Niste uneli novu lozinku");
          return;
        }
        if(this.lozinka_nova2 == ""){
          alert("Niste potvrdili novu lozinku");
          return;
        }
        if(forma.valid){
          if(this.lozinka_nova1 != this.lozinka_nova2){
            alert("Nove lozinke nisu iste");
            return;
          }
          this.korisnikService.promeniLozinku(this.korisnik.korisnicko_ime, this.lozinka_nova1).subscribe((d)=>{
            alert("Lozinka je uspesno promenjena");
            this.router.navigate(['login']);
          });
        }
      });
    }
  }

}
