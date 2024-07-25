import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { MeniService } from '../services/meni.service';

@Component({
  selector: 'app-meni',
  templateUrl: './meni.component.html',
  styleUrls: ['./meni.component.css']
})

export class MeniComponent implements OnInit{


    constructor(private router: Router,
                private meniService: MeniService
    ){
        this.meniService.promenaKorisnika.subscribe(() => {
            let temp = localStorage.getItem("meni");
            if(temp != null){
                this.meni = JSON.parse(temp);
            } else {
                this.meni = "";
            }
            this.azurirajMeni();
        })
    }

    items: MenuItem[] | undefined;
    meni: String = "";


    ngOnInit(): void {
        let temp = localStorage.getItem("meni");
        if(temp != null){
            this.meni = JSON.parse(temp);
        } else {
            this.meni = "";
        }
        this.azurirajMeni();
    }

    azurirajMeni(){
        if(this.meni == "pocetna"){
            this.items = [
                {
                    label: 'Pocetna',
                    routerLink: '/'
                },
                {
                    label: 'Prijavi se',
                    routerLink: 'login'
                },
                {
                    label: 'Registruj se',
                    routerLink: 'registracija'
                },
                {
                    label: 'Promeni lozinku',
                    routerLink: 'promenaLozinke'
                }
            ]
        } else if(this.meni == "gost"){
            this.items = [
                {
                    label: 'Profil',
                    routerLink: 'gostProfil'
                },
                {
                    label: 'Restorani',
                    routerLink: 'gostRestorani'
                },
                {
                    label: 'Rezervacije',
                    routerLink: 'gostRezervacije'
                },
                {
                    label: 'Dostava hrane',
                    routerLink: 'gostDostavaHrane'
                },
                {
                    label: 'Korpa',
                    routerLink: 'korpa'
                },
                {
                    label: 'Odjavi se',
                    routerLink: '/'
                }
            ]
        } else if(this.meni == "konobar"){
            this.items = [
                {
                    label: 'Profil',
                    routerLink: 'konobarProfil'
                },
                {
                    label: 'Rezervacije',
                    routerLink: 'konobarRezervacije'
                },
                {
                    label: 'Dostave',
                    routerLink: 'konobarDostave'
                },
                {
                    label: 'Statistika',
                    routerLink: 'konobarStatistika'
                },
                {
                    label: 'Odjavi se',
                    routerLink: '/'
                }
            ]
        } else if(this.meni == "admin"){
            this.items = [
                {
                    label: 'Profil',
                    routerLink: 'adminProfil'
                },
                {
                    label: 'Zahtevi',
                    routerLink: 'adminZahtevi'
                },
                {
                    label: 'Gosti',
                    routerLink: 'adminGosti'
                },
                {
                    label: 'Konobari',
                    routerLink: 'adminKonobari'
                },
                {
                    label: 'Restorani',
                    routerLink: 'adminRestorani'
                },
                {
                    label: 'Novi konobar',
                    routerLink: 'adminNoviKonobar'
                },
                {
                    label: 'Novi restoran',
                    routerLink: 'adminNoviRestoran'
                },
                {
                    label: 'Odjavi se',
                    routerLink: 'loginAdmin'
                }
            ]
        } else {  //LoginAdmin
            this.items = [

            ]
        }
    }

}

