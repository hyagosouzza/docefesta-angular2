import { Injectable } from '@angular/core';
import {  Marca, MARCAS } from './marca.model'

@Injectable()
export class MarcasService {

  marcas : Marca[];
  getMarcas() {
    return this.marcas = MARCAS;
  }

}