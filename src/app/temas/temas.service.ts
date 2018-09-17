import { Injectable } from '@angular/core';
import {  Tema, TEMAS } from './tema.model'

@Injectable()
export class TemasService {

  temas : Tema[];
  getTemas() {
    return this.temas = TEMAS;
  }

}