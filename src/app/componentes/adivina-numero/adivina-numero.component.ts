import { Component, OnInit } from '@angular/core';
import { AdivinaNumero } from 'src/app/clases/adivina-numero';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { ContenidoDialogComponent } from '../contenido-dialog/contenido-dialog.component';

@Component({
  selector: 'app-adivina-numero',
  templateUrl: './adivina-numero.component.html',
  styleUrls: ['./adivina-numero.component.css']
})
export class AdivinaNumeroComponent implements OnInit {

  nuevoJuego:AdivinaNumero;
  foto:string;
  verificacion:boolean;
  mensajeAyuda:string;
  numeroIngresado:any;
  numeroGenerado:boolean;

  constructor(public dialog: MatDialog) { 
    this.nuevoJuego = new AdivinaNumero();
    this.numeroGenerado = false;
  }
  IniciarJuego()
  {
    this.nuevoJuego.GenerarNumero();
    console.log(this.nuevoJuego.numeroSecreto);
    this.numeroGenerado = true;
  }
  Verificar()
  {
    if(this.numeroGenerado)
    {
      this.verificacion = this.nuevoJuego.Verificar();
      if(!this.verificacion)
      {
        document.getElementById("imgOp").hidden = false;
        this.foto = "../../../assets/imgs/error.png";
        this.mensajeAyuda = this.nuevoJuego.Ayuda();
      }
      else
      {
        document.getElementById("imgOp").hidden = false;
        this.foto = "../../../assets/imgs/tilde.jpg";
        this.mensajeAyuda = "Correcto!!";
        if(this.nuevoJuego.intentos == 1)
        {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.autoFocus = true;
          dialogConfig.disableClose = true;
          dialogConfig.data = {
            id:1,
            title: "Adivinaste!",
            titulo1: "Eres una persona o un robot??"

          }
          this.dialog.open(ContenidoDialogComponent, dialogConfig);
          this.dialog.afterAllClosed.subscribe(result=>{
            this.JugarDeNuevo();
          });
        }
        if(this.nuevoJuego.intentos == 2)
        {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.autoFocus = true;
          dialogConfig.disableClose = true;
          dialogConfig.data = {
            id:1,
            title: "Adivinaste!",
            titulo1: "A eso si que lo llamo suerte!"

          }
          this.dialog.open(ContenidoDialogComponent, dialogConfig);
          this.dialog.afterAllClosed.subscribe(result=>{
            this.JugarDeNuevo();
          });
        }
        if(this.nuevoJuego.intentos>2 && this.nuevoJuego.intentos<7)
        {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.autoFocus = true;
          dialogConfig.disableClose = true;
          dialogConfig.data = {
            id:1,
            title: "Adivinaste!",
            titulo1: "Buena estrategia para las adivinanzas!"

          }
          this.dialog.open(ContenidoDialogComponent, dialogConfig);
          this.dialog.afterAllClosed.subscribe(result=>{
            this.JugarDeNuevo();
          });
        }
        if(this.nuevoJuego.intentos >=7)
        {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.autoFocus = true;
          dialogConfig.disableClose = true;
          dialogConfig.data = {
            id:1,
            title: "Adivinaste!",
            titulo1: "Bien jugado!"

          }
          this.dialog.open(ContenidoDialogComponent, dialogConfig);
          this.dialog.afterAllClosed.subscribe(result=>{
            this.JugarDeNuevo();
          });
        }
      }
    }
    else{
      this.mensajeAyuda = "Debe generar numero primero!!";
    }
  }

  JugarDeNuevo()
  {
    this.numeroGenerado = false;
    this.nuevoJuego.numeroIngresado = 0;
    this.mensajeAyuda = "";
    this.nuevoJuego.intentos = 0;
    document.getElementById("imgOp").hidden = true;
  }

  ngOnInit() {
  }

}
