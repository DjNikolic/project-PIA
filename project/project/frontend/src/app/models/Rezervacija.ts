import { Restoran } from "./Restoran";
import { Stol } from "./Stol";

export class Rezervacija{
    id: number =0;
    restoran: Restoran = new Restoran();
    stol: Stol = new Stol();
    idk: number =0;
    pocetak:Date = new Date();
    kraj:Date = new Date();
    broj_mesta: number =0;
    opis: String = "";
    status: String = "";
    konobar: number = 0;
    razlog: String = "";
    stolovi: Stol[] = [];
}