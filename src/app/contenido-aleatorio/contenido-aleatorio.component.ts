import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contenido } from '../model/contenido';

@Component({
  selector: 'app-contenido-aleatorio',
  templateUrl: './contenido-aleatorio.component.html',
  styleUrls: ['./contenido-aleatorio.component.css']
})
export class ContenidoAleatorioComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContenidoAleatorioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contenido
  ) { }

  ngOnInit(): void {
    
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
