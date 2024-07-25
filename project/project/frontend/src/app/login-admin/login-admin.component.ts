import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../models/Korisnik';
import { MeniService } from '../services/meni.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  
  constructor(private router: Router,
              private korisnikService: KorisnikService,
              private meniService: MeniService
  ){}

  ngOnInit(): void {
    localStorage.clear();
    localStorage.setItem("meni", JSON.stringify(""))
    this.meniService.promenaKorisnika.emit(true);
  }

  korisnik: Korisnik = new Korisnik();
  poruka: String = "";

  prijavaAdmin():void{
    this.korisnikService.prijavaAdmin(this.korisnik).subscribe(d=>{
      if (d == null) {
        this.poruka = "uneli ste pogresno korisnicko ime i/ili lozinku"
      } else {
        this.poruka = "";
        localStorage.removeItem("korisnik");
        localStorage.setItem("korisnik",JSON.stringify(d));
        this.router.navigate(['adminProfil']);
      }
    });
  }

}
