import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Korisnik } from '../models/Korisnik';
import { KorisnikService } from '../services/korisnik.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-promena-lozinke3',
  templateUrl: './promena-lozinke3.component.html',
  styleUrls: ['./promena-lozinke3.component.css']
})
export class PromenaLozinke3Component implements OnInit{

  constructor(private route: ActivatedRoute,
              private router: Router,
              private korisnikService: KorisnikService
            ){}

  korisnik: Korisnik = new Korisnik();
  lozinka_nova1: String = "";
  lozinka_nova2: String = "";

  ngOnInit(): void {
    let temp = localStorage.getItem("korisnik");
    if(temp!= null){
      this.korisnik = JSON.parse(temp);
    }
  }

  potvrdi(forma: NgForm): void{
    if(forma.valid){
      if(this.lozinka_nova1 == this.lozinka_nova2){
        // promena lozinke
        this.korisnikService.promeniLozinku(this.korisnik.korisnicko_ime, this.lozinka_nova1).subscribe(()=>{
          alert("Uspesno ste promenili lozinku");
          this.router.navigate(['']);
        });
      } else {
        alert("Unete lozinke nisu iste");
      }
    }
  }

}
