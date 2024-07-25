import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { SlikaService } from '../services/slika.service';
import { MeniService } from '../services/meni.service';
import { Korisnik } from '../models/Korisnik';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gost-profil',
  templateUrl: './gost-profil.component.html',
  styleUrls: ['./gost-profil.component.css']
})
export class GostProfilComponent implements OnInit {


  constructor(private korisnikService: KorisnikService, 
    private slikaService: SlikaService,
    private meniService: MeniService
  ){}
  // prva stavka

  gost: Korisnik = new Korisnik();
  azuriraj_uzlov: boolean = false;
  gost_azuriran: Korisnik = new Korisnik();
  putanja_slike: String= "";
  slika: File = new File([''], '../assets/podrazumevano.png', { type: 'image/png' });

  ngOnInit(): void {
    localStorage.setItem("meni", JSON.stringify("gost"));
    this.meniService.promenaKorisnika.emit(true);
    debugger;
    let temp = localStorage.getItem("korisnik");
    if(temp!= null){
      this.gost = JSON.parse(temp);
      if(this.gost.slika == null || this.gost.slika == "" || this.gost.slika == "../assets/podrazumevano.png"){
        this.putanja_slike = "../assets/podrazumevano.png";
      }else{
        this.putanja_slike = "../assets/"+ this.gost.korisnicko_ime + this.gost.slika;
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
      this.gost_azuriran.slika = file.name;
    };
    img.src = URL.createObjectURL(file);
  }

  azuriraj(): void{
    this.azuriraj_uzlov = true;
    this.gost_azuriran = {...this.gost};
  }

  potvrdi(forma: NgForm): void{
    debugger;
    if (forma.valid){
      debugger;
      if(this.gost_azuriran.slika != null && this.gost.slika != null && this.gost_azuriran.slika != this.gost.slika){
        this.slikaService.obrisiSliku(this.gost.korisnicko_ime, this.gost.slika).subscribe();
      }
      this.gost_azuriran.slika = this.slika.name;
      debugger;
      localStorage.setItem("korisnik", JSON.stringify(this.gost_azuriran));
       this.korisnikService.azurirajKorisnika(this.gost_azuriran).subscribe(()=>{
        if (this.gost_azuriran.slika != null) {  // mozda null a mozda "" videcu
          debugger;
          this.slikaService.ubaciSliku(this.slika, this.gost_azuriran.korisnicko_ime).subscribe(()=>{
            this.putanja_slike = "../assets/"+ this.gost_azuriran.korisnicko_ime + this.gost_azuriran.slika;
          });
          debugger;
        }else{
          this.putanja_slike = "../assets/podrazumevano.png";
        }
        this.gost = {...this.gost_azuriran};
        this.azuriraj_uzlov = false;
      });
    } else{
      alert("Forma nije dobro popunjena");
    }
  }

  otkazi():void{
    this.gost_azuriran ={...this.gost};
    this.slika = new File([''], '../assets/podrazumevano.png', { type: 'image/png' });
    this.azuriraj_uzlov = false;
    if(this.gost.slika == null || this.gost.slika == "" || this.gost.slika == "../assets/podrazumevano.png"){
      this.putanja_slike = "../assets/podrazumevano.png";
    }else{
      this.putanja_slike = "../assets/"+ this.gost.korisnicko_ime + this.gost.slika;
    }
  }

}


