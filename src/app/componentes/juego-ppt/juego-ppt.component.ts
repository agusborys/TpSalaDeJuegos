import { Component, OnInit } from '@angular/core';
import { JuegoPPT } from 'src/app/clases/juego-ppt';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import { ContenidoDialogComponent } from '../contenido-dialog/contenido-dialog.component';


@Component({
  selector: 'app-juego-ppt',
  templateUrl: './juego-ppt.component.html',
  styleUrls: ['./juego-ppt.component.css']
})
export class JuegoPptComponent implements OnInit {

  puntajeUsuario:number;
  puntajeMaquina:number;
  nuevoJuego:JuegoPPT;
  imgEleccionUsuario:string;
  imgEleccionMaquina:string;
  partidasJugadas:number;
  resultado:string;
  ganadas:number;
  perdidas:number;
  empatadas:number;
  eleccionMaq:string;

  constructor(public snackBar:MatSnackBar, public dialog: MatDialog) {
    this.puntajeMaquina = 0;
    this.puntajeUsuario = 0;
    this.imgEleccionMaquina="";
    this.imgEleccionUsuario="";
    this.nuevoJuego = new JuegoPPT();
    this.partidasJugadas=0;
    this.ganadas = 0;
    this.perdidas = 0;
    this.empatadas = 0;
    
   }

   GenerarJuego(jugadaUsuario:string)
   {
     document.getElementById("imgUsu").hidden = false;
     document.getElementById("imgMaq").hidden = false;
     this.nuevoJuego.eleccionUsuario = jugadaUsuario;
     this.eleccionMaq = this.nuevoJuego.ObtenerEleccion();
     this.imgEleccionUsuario = "../../../assets/imgs/"+jugadaUsuario+".jpeg";
     this.imgEleccionMaquina = "../../../assets/imgs/"+this.eleccionMaq+".jpeg";
     this.partidasJugadas++;
     //console.log(this.partidasJugadas);
     if(this.nuevoJuego.eleccionMaquina == this.nuevoJuego.eleccionUsuario)
     {
      //  this.puntajeMaquina++;
      //  this.puntajeUsuario++;
       this.snackBar.open("Empate","Ok",{duration:3000});
       this.empatadas++;
       this.partidasJugadas--;
     }
     if(this.nuevoJuego.eleccionUsuario=="piedra")
     {
       if(this.nuevoJuego.eleccionMaquina=="papel")
       {
         this.puntajeMaquina++;
         this.perdidas++;
         this.snackBar.open("Ganó maquina","Ok",{duration:3000});
       }
       if(this.nuevoJuego.eleccionMaquina=="tijera")
       {
         this.puntajeUsuario++;
         this.ganadas++;
         this.snackBar.open("Ganó Usuario","Ok",{duration:3000});
       }
     }
     if(this.nuevoJuego.eleccionUsuario=="papel")
     {
       if(this.nuevoJuego.eleccionMaquina=="piedra")
       {
         this.puntajeUsuario++;
         this.ganadas++;
         this.snackBar.open("Ganó Usuario","Ok",{duration:3000});
       }
       if(this.nuevoJuego.eleccionMaquina=="tijera")
       {
         this.puntajeMaquina++;
         this.perdidas++;
         this.snackBar.open("Ganó maquina","Ok",{duration:3000});
       }
     }
     if(this.nuevoJuego.eleccionUsuario=="tijera")
     {
       if(this.nuevoJuego.eleccionMaquina=="piedra")
       {
         this.puntajeMaquina++;
         this.perdidas++;
         this.snackBar.open("Ganó maquina","Ok",{duration:3000});
       }
       if(this.nuevoJuego.eleccionMaquina=="papel")
       {
          this.puntajeUsuario++;
          this.ganadas++;
         this.snackBar.open("Ganó Usuario","Ok",{duration:3000});
       }
     }
     if(this.partidasJugadas == 5)
     {
      document.getElementById("imgUsu").hidden = true;
      document.getElementById("imgMaq").hidden = true;
       if(this.puntajeUsuario>this.puntajeMaquina)
       {
         this.resultado = "Ganaste :D";
       }
       else
       {
         if(this.puntajeMaquina == this.puntajeUsuario)
         {
           this.resultado = "Empate :/";
         }
         else{
           this.resultado = "Perdiste :(";
         }
        }
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.data = {
          id:1,
          title: this.resultado,
          ganadas: this.ganadas,
          perdidas:this.perdidas,
          empatadas:this.empatadas,
          titulo1: "Partidas Ganadas: ",
          titulo2: "Partidas Perdidas: ", 
          titulo3:"Partidas Empatadas: "
        }
        this.dialog.open(ContenidoDialogComponent, dialogConfig);
        this.dialog.afterAllClosed.subscribe(result=>{
          this.FinJuego();
        });
      }
   }

   FinJuego()
   {
      this.puntajeMaquina = 0;
      this.puntajeUsuario = 0;
      
      this.imgEleccionMaquina="";
      this.imgEleccionUsuario="";
      this.partidasJugadas=0;
      this.ganadas = 0;
      this.perdidas = 0;
      this.empatadas = 0;
   }
  ngOnInit() {
    
  }

}
