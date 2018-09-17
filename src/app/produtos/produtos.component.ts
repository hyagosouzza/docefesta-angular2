import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.model';
import { Marca } from '../marcas/marca.model';
import { MarcasService } from '../marcas/marcas.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  nprod: string = '';
  marca: string;
  prod: string;

  produtos : Produto[];
  marcas : Marca[];

  constructor(private produtoservice:ProdutosService, private marcaservice:MarcasService) {  }

  ngOnInit() {
    this.produtos = this.produtoservice.getProdutos();
    this.marcas = this.marcaservice.getMarcas();
  }

  filtrarMarca(string) {
    this.marca = string;
  }

  filtrarProd(string) {
    this.prod = string;
  }

}
