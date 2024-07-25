import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Korisnik } from '../models/Korisnik';
import { KorisnikService } from '../services/korisnik.service';
import { RezervacijaService } from '../services/rezervacija.service';
import { StolService } from '../services/stol.service';
import { Rezervacija } from '../models/Rezervacija';
import { Stol } from '../models/Stol';

@Component({
  selector: 'app-konobar-rezervacije',
  templateUrl: './konobar-rezervacije.component.html',
  styleUrls: ['./konobar-rezervacije.component.css']
})
export class KonobarRezervacijeComponent implements OnInit{

  constructor(
    private korisnikService: KorisnikService,
    private rezervacijaService: RezervacijaService,
    private stolService: StolService
  ){}

   // za canvas
  @ViewChild('canvas', {static: true}) myCanvas! : ElementRef;
  sviElementi: Stol[]=[];



  konobar: Korisnik = new Korisnik();
  idr: number = 0;

  ngOnInit(): void {
    // prva stavka
    let temp = localStorage.getItem("korisnik");
    if(temp!= null){
      this.konobar = JSON.parse(temp);
      this.korisnikService.dohvatiMestoZaposlenja(this.konobar).subscribe((d)=>{
        this.idr = d;

        // druga stavka
        debugger;
        this.rezervacijaService.dohvatiZahteveRezervacija(this.idr).subscribe((d)=>{
          debugger;
          this.rezervacije_zahtevi = d;
        });
        this.rezervacijaService.dohvatiRezervacijeKonobar(this.konobar.id).subscribe((d)=>{
          this.rezervacije_danas = d;
        });

        // za canvas
        const canvas: HTMLCanvasElement =  this.myCanvas.nativeElement;
        const context = canvas.getContext('2d');
        

        this.stolService.dohvatiSveElemente(this.idr).subscribe((d)=>{
          this.sviElementi = d;
          for(let i = 0; i < this.sviElementi.length; i++){
            if(this.sviElementi[i].tip =='kuhinja'){
              if(context){
                context.strokeRect(this.sviElementi[i].k1,this.sviElementi[i].k2, this.sviElementi[i].k3, this.sviElementi[i].k4);//(x, y, a, b) = (k1 ,k2 ,k3 ,k4)
                context.font = '20px Arial';
                context.fillText('Kuhinja', this.sviElementi[i].k1 + 30, this.sviElementi[i].k2 + 50); // (x,y)
              }
            } else if(this.sviElementi[i].tip =='toalet') {
              if(context){
                context.strokeRect(this.sviElementi[i].k1,this.sviElementi[i].k2, this.sviElementi[i].k3, this.sviElementi[i].k4);//(x, y, a, b) = (k1 ,k2 ,k3 ,k4)
                context.font = '20px Arial';
                context.fillText('Toalet', this.sviElementi[i].k1 + 15, this.sviElementi[i].k2 + 50); // (x,y)
              }
            } else if(this.sviElementi[i].tip =='stol'){
              if(context){
                context.beginPath();
                context.arc(this.sviElementi[i].k1, this.sviElementi[i].k2, this.sviElementi[i].k3, (Math.PI / 180) * 0, (Math.PI) / 180 * 360);//(y,x,r) = (a,b,c)
                context.font = '20px Arial';
                context.fillText(this.sviElementi[i].broj_mesta.toString(), this.sviElementi[i].k1-5, this.sviElementi[i].k2+5);
                context.stroke();
              }
            }
          }
        })

      });
    }
  }
  
  
  rezervacije_zahtevi: Rezervacija[] = [];
  rezervacije_danas: Rezervacija[] = [];
  prethodni_stol: Stol = new Stol();

  prihvatiRezervaciju(r: Rezervacija): void{
    debugger;
    if(r.stol != null){
      r.konobar = this.konobar.id;
      this.rezervacijaService.prihvatiRezervaciju(r).subscribe(()=>{

        alert("Rezervacija je uspesno prihvacena");
        //za canvas
        const canvas: HTMLCanvasElement =  this.myCanvas.nativeElement;
        const context = canvas.getContext('2d');
        if(this.prethodni_stol.id != 0){
          if(context){
            context.clearRect(this.prethodni_stol.k1-this.prethodni_stol.k3,this.prethodni_stol.k2-this.prethodni_stol.k3, this.prethodni_stol.k3*2, this.prethodni_stol.k3*2);//(x, y, a, b) = (k1 ,k2 ,k3 ,k4)
            context.beginPath();
            context.fillStyle = 'black';
            context.arc(this.prethodni_stol.k1, this.prethodni_stol.k2, this.prethodni_stol.k3, (Math.PI / 180) * 0, (Math.PI) / 180 * 360);//(y,x,r) = (a,b,c)
            context.font = '20px Arial';
            context.fillText(this.prethodni_stol.broj_mesta.toString(), this.prethodni_stol.k1-5, this.prethodni_stol.k2+5);
            context.stroke();
          }
        } if(context){
          context.beginPath();
            context.arc(r.stol.k1, r.stol.k2, r.stol.k3, (Math.PI / 180) * 0, (Math.PI) / 180 * 360);//(y,x,r) = (a,b,c)
            context.fillStyle = 'red';
            context.fill();
        } 
        this.prethodni_stol = r.stol;

        this.rezervacijaService.dohvatiZahteveRezervacija(this.idr).subscribe((d)=>{
          this.rezervacije_zahtevi = d;
          debugger;
        });
        this.rezervacijaService.dohvatiRezervacijeKonobar(this.konobar.id).subscribe((d)=>{
          this.rezervacije_danas = d;
        });
      });
    } else{
      alert("Morate izabrati stol");
    }
   
  }

  odbijRezervaciju(r: Rezervacija): void{
    debugger;
    if(r.razlog != null && r.razlog != ""){
      this.rezervacijaService.odbijRezervaciju(r).subscribe(()=>{
        alert("Rezervacija je uspesno odbijena");
        this.rezervacijaService.dohvatiZahteveRezervacija(this.idr).subscribe((d)=>{
          this.rezervacije_zahtevi = d;
        });
      });
    }else{
      alert("Morate da popunite polje razlog da biste odbili rezervaciju");
    }
  }

  proveriDatum(r: Rezervacija): boolean{
    const tridesetMinuta = 30 * 60 * 1000;
    let sada = new Date();
    let pocetak = new Date(r.pocetak);
    let razlikaUMilisekundama = sada.getTime() - pocetak.getTime();
    return razlikaUMilisekundama >= tridesetMinuta;
  }

  dosaoGost(r: Rezervacija){
    this.rezervacijaService.dosaoGost(r.id).subscribe(()=>{
      this.rezervacijaService.dohvatiRezervacijeKonobar(this.konobar.id).subscribe((d)=>{
        this.rezervacije_danas = d;
      })
    });
  }

  nijeDosaoGost(r: Rezervacija){
    this.rezervacijaService.nijeDosaoGost(r.id).subscribe(()=>{
      this.rezervacijaService.dohvatiRezervacijeKonobar(this.konobar.id).subscribe((d)=>{
        this.rezervacije_danas = d;
      })
    });
  }

  dohvatiStolove(r: Rezervacija){
    return this.stolService.dohvatiStolove(r);
  }
  
}
