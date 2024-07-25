import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/Korisnik';
import { MeniService } from '../services/meni.service';

@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.component.html',
  styleUrls: ['./admin-profil.component.css']
})
export class AdminProfilComponent implements OnInit {

  constructor(private meniService: MeniService){}
 
  
  admin: Korisnik = new Korisnik();
  putanja_slike: String = "";



  ngOnInit(): void {
    localStorage.setItem("meni", JSON.stringify("admin"));
    this.meniService.promenaKorisnika.emit(true);
    let temp = localStorage.getItem("korisnik");
    if(temp!= null)
      this.admin = JSON.parse(temp);
    if(this.admin.slika == null || this.admin.slika == "" || this.admin.slika == "../assets/podrazumevano.png"){
      this.putanja_slike = "../assets/podrazumevano.png";
    }else{
      this.putanja_slike = "../assets/"+ this.admin.korisnicko_ime + this.admin.slika;
    }
  }
}
