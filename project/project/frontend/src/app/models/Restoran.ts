import { Korisnik } from "./Korisnik";

export class Restoran {
    id: number = 0;
    naziv: String  = "";
    adresa: String  = "";
    tip: String  = "";
    opis: String = ""
    telefon: String = "";
    // treba da uklonim
    konobari: Korisnik[] = [];
}