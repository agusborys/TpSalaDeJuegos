import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { AdivinaMarcaComponent } from './componentes/adivina-marca/adivina-marca.component';
import { JuegoPptComponent } from './componentes/juego-ppt/juego-ppt.component';
import { AdivinaNumeroComponent } from './componentes/adivina-numero/adivina-numero.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'juegos', component:JuegosComponent,
   children:
   [{path:'adivinaLaMarca', component:AdivinaMarcaComponent},
     {path:'PiedraPapelTijera', component:JuegoPptComponent},
     {path:'adivinaNumero', component:AdivinaNumeroComponent},
     {path:'agilidadAritmetica', component:AgilidadAritmeticaComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
