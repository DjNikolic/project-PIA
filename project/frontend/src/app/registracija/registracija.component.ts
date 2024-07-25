import { Component } from '@angular/core';
import { Korisnik } from '../models/Korisnik';
import { Router } from '@angular/router';
import { KorisnikService } from '../services/korisnik.service';
import { NgForm } from '@angular/forms';
import { SlikaService } from '../services/slika.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent {

  constructor(private router: Router,
              private korisnikService: KorisnikService,
              private slikaService: SlikaService
            ){}

  korisnik: Korisnik = new Korisnik();
  slika: File = new File([''], '../assets/ikona.png', { type: 'image/png' });

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
      this.korisnik.slika = file.name;
    };
    img.src = URL.createObjectURL(file);
  }

  registracija(forma: NgForm): void{
    debugger;
    if (forma.valid) {
      this.korisnikService.registracija(this.korisnik).subscribe((d) => {
        debugger;
        alert(d);
        if (d == "Zahtev za registraciju je poslat" && this.korisnik.slika != null && this.korisnik.slika != "") {
          debugger;
          this.slikaService.ubaciSliku(this.slika, this.korisnik.korisnicko_ime).subscribe();
        }
      });
    } else {
      alert("Forma nije dobro popunjena");
    }
  }


}
