import { Restoran } from "./Restoran";
import { StavkaDostave } from "./StavkaDostave";

export class Dostava{
    id: number = 0;
    idk: number = 0;
    restoran: Restoran = new Restoran();
    datum: Date = new Date();
    iznos: number = 0;
    vreme_dostave: String = "";
    //vreme_dostave: any = "";
    status: String = "";
    stavke: StavkaDostave[] = [];
}