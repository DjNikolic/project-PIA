import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaStranaComponent } from './pocetna-strana/pocetna-strana.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { PromenaLozinke2Component } from './promena-lozinke2/promena-lozinke2.component';
import { PromenaLozinke3Component } from './promena-lozinke3/promena-lozinke3.component';
import { RestoranComponent } from './restoran/restoran.component';
import { KorpaComponent } from './korpa/korpa.component';
import { GostProfilComponent } from './gost-profil/gost-profil.component';
import { GostRezervacijeComponent } from './gost-rezervacije/gost-rezervacije.component';
import { GostRestoraniComponent } from './gost-restorani/gost-restorani.component';
import { GostDostavaHraneComponent } from './gost-dostava-hrane/gost-dostava-hrane.component';
import { KonobarProfilComponent } from './konobar-profil/konobar-profil.component';
import { KonobarRezervacijeComponent } from './konobar-rezervacije/konobar-rezervacije.component';
import { KonobarDostaveComponent } from './konobar-dostave/konobar-dostave.component';
import { KonobarStatistikaComponent } from './konobar-statistika/konobar-statistika.component';
import { AdminProfilComponent } from './admin-profil/admin-profil.component';
import { AdminZahteviComponent } from './admin-zahtevi/admin-zahtevi.component';
import { AdminGostiComponent } from './admin-gosti/admin-gosti.component';
import { AdminKonobariComponent } from './admin-konobari/admin-konobari.component';
import { AdminRestoraniComponent } from './admin-restorani/admin-restorani.component';
import { AdminNoviKonobarComponent } from './admin-novi-konobar/admin-novi-konobar.component';
import { AdminNoviRestoranComponent } from './admin-novi-restoran/admin-novi-restoran.component';

const routes: Routes = [
  {path:'', component: PocetnaStranaComponent},
  {path:'loginAdmin', component: LoginAdminComponent},
  {path:'login', component: LoginComponent},
  {path:'registracija', component: RegistracijaComponent},
  {path:'promenaLozinke', component: PromenaLozinkeComponent},
  {path:'promenaLozinke2', component: PromenaLozinke2Component},
  {path:'promenaLozinke3', component: PromenaLozinke3Component},
  {path:'restoran', component: RestoranComponent},
  {path:'korpa', component: KorpaComponent},
  {path:'gostProfil', component: GostProfilComponent},
  {path:'gostRezervacije', component: GostRezervacijeComponent},
  {path:'gostRestorani', component: GostRestoraniComponent},
  {path:'gostDostavaHrane', component: GostDostavaHraneComponent},
  {path:'konobarProfil', component: KonobarProfilComponent},
  {path:'konobarRezervacije', component: KonobarRezervacijeComponent},
  {path:'konobarDostave', component: KonobarDostaveComponent},
  {path:'konobarStatistika', component: KonobarStatistikaComponent},
  {path:'adminProfil', component: AdminProfilComponent},
  {path:'adminZahtevi', component: AdminZahteviComponent},
  {path:'adminGosti', component: AdminGostiComponent},
  {path:'adminKonobari', component: AdminKonobariComponent},
  {path:'adminRestorani', component: AdminRestoraniComponent},
  {path:'adminNoviKonobar', component: AdminNoviKonobarComponent},
  {path:'adminNoviRestoran', component: AdminNoviRestoranComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
