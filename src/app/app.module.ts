import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PapaParseModule } from 'ngx-papaparse';
import {NgPipesModule} from 'ngx-pipes';
import {NgxMaskModule} from 'ngx-mask'

import { AppComponent } from './app.component';
import { MarcasComponent } from './marcas/marcas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TemasComponent } from './temas/temas.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { MarcasModule } from './marcas/marcas.module';
import { TemasModule } from './temas/temas.module';
import { ProdutosModule } from './produtos/produtos.module';

const appRoutes: Routes = [
  { path: 'marcas', component: MarcasComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'temas', component: TemasComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent,
    ProdutosComponent,
    TemasComponent,
    SobreComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    PapaParseModule,
    MarcasModule,
    TemasModule,
    ProdutosModule,
    NgPipesModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
