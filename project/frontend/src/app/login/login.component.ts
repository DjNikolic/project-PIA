import { Component } from '@angular/core';
import { Korisnik } from '../models/Korisnik';
import { KorisnikService } from '../services/korisnik.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private router: Router, private korisnikService: KorisnikService){}

  korisnik: Korisnik = new Korisnik();

  prijava():void{
    this.korisnikService.prijava(this.korisnik).subscribe(d=>{
      if (d == null) {
        alert("Uneli ste pogresno korisnicko ime i/ili lozinku");
      } else {
        if(d.status == "Z"){
          alert("Zahtev za registraciju jos nije prihvacen");
          return;
        }
        if(d.status == "D"){
          alert("Nalog je deaktiviran");
          return;
        }
        this.korisnik = d;
        localStorage.removeItem("korisnik");
        localStorage.setItem("korisnik",JSON.stringify(d));
        if (d.tip == "gost") {
          this.router.navigate(['gostProfil']);
        } else if (d.tip == "konobar") {
          this.router.navigate(['konobarProfil']);
        }
      }
    });
  }

}
