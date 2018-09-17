import { NgModule } from "@angular/core";
//import {ProdutosComponent} from "./produtos.component";
import { CommonModule } from "@angular/common";
import { ProdutosService } from "./produtos.service";
import { MarcasService } from "../marcas/marcas.service";

@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [],
    providers: [ProdutosService, MarcasService]
})

export class ProdutosModule {}