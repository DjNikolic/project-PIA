import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeniService {

  promenaKorisnika: EventEmitter<any> =  new EventEmitter<any>();

  constructor() { }
}
