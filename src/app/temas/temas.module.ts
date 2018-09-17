import { NgModule } from "@angular/core";
//import {TemasComponent} from "./temas.component";
import { CommonModule } from "@angular/common";
import { TemasService } from "./temas.service";

@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [],
    providers: [TemasService]
})

export class TemasModule {}