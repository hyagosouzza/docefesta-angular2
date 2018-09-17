import { Injectable } from '@angular/core';
import {  Produto, PRODUTOS } from './produto.model'

@Injectable()
export class ProdutosService {

  produtos : Produto[];
  getProdutos() {
    return this.produtos = PRODUTOS;
  }

}