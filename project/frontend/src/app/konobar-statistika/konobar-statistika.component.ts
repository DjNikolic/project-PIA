import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { RezervacijaService } from '../services/rezervacija.service';
import { Korisnik } from '../models/Korisnik';
import { Statistika1 } from '../models/Statistika1';
import { Statistika2 } from '../models/Statistika2';
import { Statistika3 } from '../models/Statistika3';

@Component({
  selector: 'app-konobar-statistika',
  templateUrl: './konobar-statistika.component.html',
  styleUrls: ['./konobar-statistika.component.css']
})
export class KonobarStatistikaComponent implements OnInit{

  constructor(
    private korisnikService: KorisnikService,
    private rezervacijaService: RezervacijaService
  ){}


  konobar: Korisnik = new Korisnik();
  idr: number = 0;

  data1: any;
  options1: any;
  statistika1: Statistika1 = new Statistika1;
  data2: any;
  options2: any;
  statistika2: Statistika2 = new Statistika2;
  data3: any;
  options3: any;
  statistika3: Statistika3 = new Statistika3;

  ngOnInit(): void {
    // prva stavka
    let temp = localStorage.getItem("korisnik");
    if(temp!= null){
      this.konobar = JSON.parse(temp);
    }
    this.korisnikService.dohvatiMestoZaposlenja(this.konobar).subscribe((d)=>{
      this.idr = d;

      // cetvrta stavka
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.rezervacijaService.dohvatiStatistiku1(this.konobar.id).subscribe((d)=>{
        this.statistika1 = d;
        this.data1 = {
          labels: d.datumi,
          datasets: [
              {
                  label: '',
                  backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  data: d.vrednosti
              }
          ]
      };

      this.options1 = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary,
                      font: {
                          weight: 500
                      }
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }

          }
      };
      });

      this.rezervacijaService.dohvatiStatistiku2(this.idr).subscribe((d)=>{
        this.statistika2 = d;
        this.data2 = {
          labels: d.imena,
          datasets: [
              {
                  data: d.vrednosti,
              }
          ]
      };
      this.options2 = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor
                  }
              }
          }
      };
    
      });


      this.rezervacijaService.dohvatiStatistiku3(this.konobar.id).subscribe((d)=>{
        this.statistika3 = d;
        this.data3 = {
          labels: this.statistika3.dani,
          datasets: [
              {
                  label: '',
                  backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  data: this.statistika3.vrednosti
              }
          ]
      };

      this.options3 = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary,
                      font: {
                          weight: 500
                      }
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }

          }
      };
      });
    });
  }

}
