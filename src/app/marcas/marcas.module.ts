import { NgModule } from "@angular/core";
//import {MarcasComponent} from "./marcas.component";
import { CommonModule } from "@angular/common";
import { MarcasService } from "./marcas.service";

@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [],
    providers: [MarcasService]
})

export class MarcasModule {}