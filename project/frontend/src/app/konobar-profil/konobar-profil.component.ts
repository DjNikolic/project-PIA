import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { SlikaService } from '../services/slika.service';
import { Korisnik } from '../models/Korisnik';
import { NgForm } from '@angular/forms';
import { MeniService } from '../services/meni.service';

@Component({
  selector: 'app-konobar-profil',
  templateUrl: './konobar-profil.component.html',
  styleUrls: ['./konobar-profil.component.css']
})
export class KonobarProfilComponent implements OnInit{

  constructor(
      private korisnikService: KorisnikService,
      private slikaService: SlikaService,
      private meniService: MeniService
  ){}

  konobar: Korisnik = new Korisnik();
  azuriraj_uzlov: boolean = false;
  konobar_azuriran: Korisnik = new Korisnik();
  putanja_slike: String= "";
  slika: File = new File([''], '../assets/podrazumevano.png', { type: 'image/png' });

  ngOnInit(): void {
    localStorage.setItem("meni", JSON.stringify("konobar"));
    this.meniService.promenaKorisnika.emit(true);
    let temp = localStorage.getItem("korisnik");
    if(temp!= null){
      this.konobar = JSON.parse(temp);
      if(this.konobar.slika == null || this.konobar.slika == "" || this.konobar.slika == "../assets/podrazumevano.png"){
        this.putanja_slike = "../assets/podrazumevano.png";
      }else{
        this.putanja_slike = "../assets/"+ this.konobar.korisnicko_ime + this.konobar.slika;
      }
    }
  }

  unetaSlika(event: any) {
    const file = event.files[0];
    if (!file) {
      return;
    }
    if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
      alert('Slika nije tipa .png ili .jpeg');
      return;
    }
    const img = new Image();
    img.onload = () => {
      if (img.width < 100 || img.width > 300 || img.height < 100 || img.height > 300) {
        alert('Slika nije odgovarajućih dimenzija (min 100x100, max 300x300)');
        return;
      }
      debugger;
      this.slika = file;
      this.konobar_azuriran.slika = file.name;
    };
    img.src = URL.createObjectURL(file);
  }

  azuriraj(): void{
    this.azuriraj_uzlov = true;
    this.konobar_azuriran = {...this.konobar};
  }

  potvrdi(forma: NgForm): void{
    debugger;
    if (forma.valid){
      if(this.konobar_azuriran.slika != null && this.konobar.slika != null && this.konobar_azuriran.slika != this.konobar.slika){
        this.slikaService.obrisiSliku(this.konobar.korisnicko_ime, this.konobar.slika).subscribe();
      }
      this.konobar_azuriran.slika = this.slika.name;
      debugger;
      localStorage.setItem("korisnik", JSON.stringify(this.konobar_azuriran));
       this.korisnikService.azurirajKorisnika(this.konobar_azuriran).subscribe(()=>{
        if (this.konobar_azuriran.slika != null) {  // mozda null a mozda "" videcu
          debugger;
          this.slikaService.ubaciSliku(this.slika, this.konobar_azuriran.korisnicko_ime).subscribe(()=>{
            this.putanja_slike = "../assets/"+ this.konobar_azuriran.korisnicko_ime + this.konobar_azuriran.slika;
          });
          debugger;
        }else{
          this.putanja_slike = "../assets/podrazumevano.png";
        }
        this.konobar = {...this.konobar_azuriran};
        this.azuriraj_uzlov = false;
      });
    } else{
      alert("Forma nije dobro popunjena");
    }
  }


  otkazi():void{
    this.konobar_azuriran ={...this.konobar};
    this.slika = new File([''], '../assets/podrazumevano.png', { type: 'image/png' });
    this.azuriraj_uzlov = false;
    if(this.konobar.slika == null || this.konobar.slika == "" || this.konobar.slika == "../assets/podrazumevano.png"){
      this.putanja_slike = "../assets/podrazumevano.png";
    }else{
      this.putanja_slike = "../assets/"+ this.konobar.korisnicko_ime + this.konobar.slika;
    }
  }

}
