import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaStranaComponent } from './pocetna-strana/pocetna-strana.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GostComponent } from './gost/gost.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminComponent } from './admin/admin.component';
import { KonobarComponent } from './konobar/konobar.component';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { PromenaLozinke2Component } from './promena-lozinke2/promena-lozinke2.component';
import { PromenaLozinke3Component } from './promena-lozinke3/promena-lozinke3.component';
import { RestoranComponent } from './restoran/restoran.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KorpaComponent } from './korpa/korpa.component';
import { ChartModule } from 'primeng/chart';
import { MeniComponent } from './meni/meni.component';
import { MenubarModule } from 'primeng/menubar';
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
import { AdminNoviRestoranComponent } from './admin-novi-restoran/admin-novi-restoran.component';
import { AdminNoviKonobarComponent } from './admin-novi-konobar/admin-novi-konobar.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    AppComponent,
    PocetnaStranaComponent,
    GostComponent,
    LoginAdminComponent,
    AdminComponent,
    KonobarComponent,
    LoginComponent,
    RegistracijaComponent,
    PromenaLozinkeComponent,
    PromenaLozinke2Component,
    PromenaLozinke3Component,
    RestoranComponent,
    KorpaComponent,
    MeniComponent,
    GostProfilComponent,
    GostRezervacijeComponent,
    GostRestoraniComponent,
    GostDostavaHraneComponent,
    KonobarProfilComponent,
    KonobarRezervacijeComponent,
    KonobarDostaveComponent,
    KonobarStatistikaComponent,
    AdminProfilComponent,
    AdminZahteviComponent,
    AdminGostiComponent,
    AdminKonobariComponent,
    AdminRestoraniComponent,
    AdminNoviRestoranComponent,
    AdminNoviKonobarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    BrowserAnimationsModule,
    ChartModule,
    MenubarModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    FileUploadModule,
    PanelModule,
    DropdownModule,
    InputNumberModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
