import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/Korisnik';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-promena-lozinke2',
  templateUrl: './promena-lozinke2.component.html',
  styleUrls: ['./promena-lozinke2.component.css']
})
export class PromenaLozinke2Component implements OnInit{

  constructor(private router: Router){}

  korisnik: Korisnik = new Korisnik();
  odgovor: String = "";
  poruka: String = "";

  ngOnInit(): void {
    let temp = localStorage.getItem("korisnik");
    if(temp!= null){
      this.korisnik = JSON.parse(temp);
    }
  }

  potvrdi(): void{
    if(this.odgovor == this.korisnik.odgovor){
      this.router.navigate(['promenaLozinke3']);
    } else {
      this.poruka = "Odgovor je netacan";
    }
  }

}
