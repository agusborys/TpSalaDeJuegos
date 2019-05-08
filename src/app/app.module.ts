import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,
         MatToolbarModule, MatSidenavModule, MatListModule, MatInputModule,
         MatRadioModule, MatFormFieldModule, MatDividerModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './componentes/main-nav/main-nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdivinaMarcaComponent } from './componentes/adivina-marca/adivina-marca.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { ContenidoDialogComponent } from './componentes/contenido-dialog/contenido-dialog.component';
import { JuegoPptComponent } from './componentes/juego-ppt/juego-ppt.component';
import { AdivinaNumeroComponent } from './componentes/adivina-numero/adivina-numero.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    AdivinaMarcaComponent,
    JuegosComponent,
    ContenidoDialogComponent,
    JuegoPptComponent,
    AdivinaNumeroComponent,
    AgilidadAritmeticaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ContenidoDialogComponent]
})
export class AppModule { }
