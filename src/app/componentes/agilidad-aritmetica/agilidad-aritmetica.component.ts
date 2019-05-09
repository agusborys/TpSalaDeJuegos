import { Component, OnInit } from '@angular/core';
import { AgilidadAritmetica } from 'src/app/clases/agilidad-aritmetica';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { ContenidoDialogComponent } from '../contenido-dialog/contenido-dialog.component';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  nuevoJuego:AgilidadAritmetica;
  jugadas:number;
  foto:string;
  resultado:boolean;
  cuentaAtras:any;
  mensaje:string;
  ganadas:number;
  perdidas:number;
  flagVerificar:boolean;

  constructor(public dialog: MatDialog) { 
    this.nuevoJuego = new AgilidadAritmetica();
    this.jugadas = 0;
    this.ganadas = 0;
    this.perdidas = 0;

  }

  Contador(segundos)
  {
    this.cuentaAtras = segundos;
    let interval = setInterval(()=>{
      (<HTMLButtonElement>document.getElementById("btnGen")).disabled = true;
      this.cuentaAtras--;
      if(this.cuentaAtras==0)
      {
        clearInterval(interval);
        (<HTMLButtonElement>document.getElementById("btnGen")).disabled = false;
        if(!this.flagVerificar)
        {
          this.Verificar();
        }

      }
    },1000);
    //this.Verificar();
  }

  IniciarJuego()
  {
    this.nuevoJuego.GenerarJuego();
    //console.log(this.nuevoJuego.resultadoVerdadero);
    this.Contador(7);
    document.getElementById("imgOp").hidden = true;
    document.getElementById("msj").hidden = true;
    (<HTMLButtonElement>document.getElementById("btnVer")).disabled = false;
    this.flagVerificar = false;
    this.nuevoJuego.resultadoJugador = 0;
  }

  Verificar()
  {
    this.flagVerificar = true;
    (<HTMLButtonElement>document.getElementById("btnVer")).disabled = true;
    this.jugadas++;
    if(this.nuevoJuego.Verificar())
    {
      this.ganadas++;
      this.foto = "../../../assets/imgs/tilde.jpg";
      document.getElementById("imgOp").hidden = false;
      document.getElementById("msj").hidden = true;
    }
    else
    {
      this.perdidas++;
      this.foto = "../../../assets/imgs/error.png";
      document.getElementById("imgOp").hidden = false;
      document.getElementById("msj").hidden = false;
      this.mensaje = "Error el resultado era: ";
    }
    if(this.jugadas == 5)
    {
      this.FinJuego();
    }

  }
  
  FinJuego()
  {
    (<HTMLButtonElement>document.getElementById("btnVer")).disabled = true;
    document.getElementById("imgOp").hidden = true;
    document.getElementById("msj").hidden = true;
    if(this.ganadas > this.perdidas)
    {
      const dialogConfig = new MatDialogConfig();
            dialogConfig.autoFocus = true;
            dialogConfig.disableClose = true;
            dialogConfig.data = {
              id:1,
              title: "Ganaste!",
              titulo1: "Si que eres rápido para las cuentas",
              titulo2: "ganadas",
              perdidas: this.ganadas,
              titulo3: "perdidas",
              empatadas: this.perdidas

            }
            this.dialog.open(ContenidoDialogComponent, dialogConfig);
            this.dialog.afterAllClosed.subscribe(result=>{
              this.JugarDeNuevo();
            });
    
      }
      else
      {
        const dialogConfig = new MatDialogConfig();
            dialogConfig.autoFocus = true;
            dialogConfig.disableClose = true;
            dialogConfig.data = {
              id:1,
              title: "Perdiste!",
              titulo1: "La próxima será",
              titulo2: "ganadas",
              perdidas: this.ganadas,
              titulo3: "perdidas",
              empatadas: this.perdidas

            }
            this.dialog.open(ContenidoDialogComponent, dialogConfig);
            this.dialog.afterAllClosed.subscribe(result=>{
              this.JugarDeNuevo();
            });
      }

  }
  JugarDeNuevo()
  {
    
    this.jugadas = 0;
    this.ganadas = 0;
    this.perdidas = 0;
    this.nuevoJuego = new AgilidadAritmetica();

  }
  ngOnInit() {
    (<HTMLButtonElement>document.getElementById("btnVer")).disabled = true;
  }

}
