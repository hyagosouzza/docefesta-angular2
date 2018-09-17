import { Component, OnInit } from '@angular/core';
import { Tema } from './tema.model';
import { TemasService } from './temas.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  temas : Tema[];
  tag: string;

  constructor(private temaservice:TemasService) {  }

  ngOnInit() {
    this.temas = this.temaservice.getTemas();
  }

  filterTag(string) {
    this.tag = string;
  }


}
