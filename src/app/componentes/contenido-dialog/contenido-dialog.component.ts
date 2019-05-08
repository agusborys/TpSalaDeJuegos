import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenido-dialog',
  templateUrl: './contenido-dialog.component.html',
  styleUrls: ['./contenido-dialog.component.css']
})
export class ContenidoDialogComponent implements OnInit {

  titulo : string;
  ganadas:number;
  perdidas:number;
  empatadas:number;
  titulo1:string;
  titulo2:string;
  titulo3:string;
  constructor(private dialogRef:MatDialogRef<ContenidoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data, private router: Router) {
      this.titulo = data.title;
      this.ganadas = data.ganadas,
      this.perdidas = data.perdidas,
      this.empatadas = data.empatadas,
      this.titulo1 = data.titulo1,
      this.titulo2 = data.titulo2,
      this.titulo3 = data.titulo3
     }

  ngOnInit() {
  }
  IrAlMenu()
  {
    this.router.navigate(['/home']);
    this.dialogRef.close();
  }
  Jugar()
  {
    //window.location.reload();
    this.dialogRef.close();
  }

}
