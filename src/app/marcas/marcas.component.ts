import { Component, OnInit } from '@angular/core';
import { Marca } from './marca.model';
import { MarcasService } from './marcas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})

export class MarcasComponent implements OnInit {

  marcas : Marca[];

  constructor(private marcaservice:MarcasService) {  }

  ngOnInit() {
    this.marcas = this.marcaservice.getMarcas();
  }

}
