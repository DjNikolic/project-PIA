import { Component } from '@angular/core';
import { RestoranService } from '../services/restoran.service';
import { Restoran } from '../models/Restoran';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-novi-restoran',
  templateUrl: './admin-novi-restoran.component.html',
  styleUrls: ['./admin-novi-restoran.component.css']
})
export class AdminNoviRestoranComponent{

  constructor(private restoranService: RestoranService){}
 
  novi_restoran: Restoran = new Restoran();
  poruka_restoran: String = "";
  stolovi: File | null = null;
  stoloviLoaded: boolean = false;

  unosStolova(event: any) {
    debugger;
    const file = event.files[0];
    if (file) {
      this.stolovi = file;
      this.stoloviLoaded = true;
    } else {
      this.stoloviLoaded = false;
    }
  }

  dodajRestoran(dodajRestoranForma: NgForm) {
    debugger;
    if (dodajRestoranForma.valid) {
      debugger;
      if (this.stoloviLoaded == false) {
        alert("JSON fajl nije dodat");
        return;
      }
      if(this.stolovi)
        this.restoranService.dodajRestoran(this.stolovi, this.novi_restoran).subscribe(()=>{
          alert("Restoran je uspesno dodat");
          this.novi_restoran = new Restoran();
          this.stolovi = null;
          this.stoloviLoaded = false;
        });
    }else {
      alert("Forma nije dobro popunjena");
    }
  }
}
