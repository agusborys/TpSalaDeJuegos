import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import { AdivinaLaMarca } from '../../clases/adivina-marca';
import { ContenidoDialogComponent } from '../contenido-dialog/contenido-dialog.component';

@Component({
  selector: 'app-adivina-marca',
  templateUrl: './adivina-marca.component.html',
  styleUrls: ['./adivina-marca.component.css']
})
export class AdivinaMarcaComponent implements OnInit {

  vidas:number;
  nuevoJuego:AdivinaLaMarca;
  fotoOpcion:string;
  opcionElegida:string;
  opcionCorrecta:string;
  partidasJugadas:number;
  opcionVieja:any;

  constructor(public snackBar:MatSnackBar, public dialog: MatDialog) {
    this.vidas=3;
    this.partidasJugadas = 0;
    this.nuevoJuego = new AdivinaLaMarca();
    this.GenerarJuego();
    this.opcionVieja = this.nuevoJuego.elementoAdivinar;
   }

   GenerarJuego()
   {
    this.nuevoJuego.GenerarOpcion();
    if(this.opcionVieja == this.nuevoJuego.elementoAdivinar)
    {
      this.GenerarJuego();
      this.partidasJugadas--;
    }
    this.fotoOpcion = "../../../assets/imgs/marcas/" + this.nuevoJuego.pathMarca;
    this.opcionCorrecta = this.nuevoJuego.opcionOk;
    this.opcionVieja = this.nuevoJuego.elementoAdivinar;
    this.partidasJugadas++;
    if(this.partidasJugadas==4)
    {
      const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.data = {
          id:1,
          title: "Ganaste!"
        }
        this.dialog.open(ContenidoDialogComponent, dialogConfig);
        this.dialog.afterAllClosed.subscribe(result=>{
          this.partidasJugadas=0;
          this.vidas = 3;
        })
    }
   }
   Verificar()
   {
     if(this.opcionElegida == this.opcionCorrecta)
     {
      this.snackBar.open("Correcto!","Ok",{duration:2000});
      this.GenerarJuego();
     }
     else{
      this.snackBar.open("Incorrecto!","Ok",{duration:2000});
      this.vidas--;
      if(this.vidas == 0)
      {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.data = {
          id:1,
          title: "Perdiste!"
        }
        this.dialog.open(ContenidoDialogComponent, dialogConfig);
        this.dialog.afterAllClosed.subscribe(result=>{
          this.partidasJugadas=0;
          this.vidas = 3;
          this.GenerarJuego();
        })
      }
     }

   }

  ngOnInit() {
  }

}
