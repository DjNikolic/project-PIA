import { Component, OnInit } from '@angular/core';
import { RestoranService } from '../services/restoran.service';
import { NgForm } from '@angular/forms';
import { KorisnikService } from '../services/korisnik.service';
import { SlikaService } from '../services/slika.service';
import { Restoran } from '../models/Restoran';
import { KonobarRestoran } from '../models/KonobarRestoran';

@Component({
  selector: 'app-admin-novi-konobar',
  templateUrl: './admin-novi-konobar.component.html',
  styleUrls: ['./admin-novi-konobar.component.css']
})
export class AdminNoviKonobarComponent implements OnInit {

  constructor(private korisnikService: KorisnikService,
              private restoranService: RestoranService,
              private slikaService: SlikaService
            ){}
 
  restorani: Restoran[] = [];
  novi_konobar: KonobarRestoran = new KonobarRestoran();
  slika: File = new File([''], '../assets/podrazumevano.png', { type: 'image/png' });


  ngOnInit(): void {
    this.restoranService.dohvatiRestorane().subscribe(d=>{
      this.restorani = d;
    }) 
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
      this.novi_konobar.konobar.slika = file.name;
      this.slika = file;
    };
    img.src = URL.createObjectURL(file);
  }

  dodajKonobara(dodajKonobaraForm: NgForm): void{
    debugger;
    if (dodajKonobaraForm.valid) {
      if(this.novi_konobar.restoran.id == 0){
        alert("Morate uneti restoran");
        return;
      };
      this.korisnikService.registracijaKonobar(this.novi_konobar).subscribe((d) => {
        debugger;
        alert(d);
        if ( d =="Konobar je uspesno kreiran" && this.novi_konobar.konobar.slika != null && this.novi_konobar.konobar.slika != "") {
          debugger;
          this.slikaService.ubaciSliku(this.slika, this.novi_konobar.konobar.korisnicko_ime).subscribe();
        }
        debugger;
        //this.novi_konobar = new KonobarRestoran();
      });
    } else {
      alert("Forma nije dobro popunjena");
    }
  }

}
