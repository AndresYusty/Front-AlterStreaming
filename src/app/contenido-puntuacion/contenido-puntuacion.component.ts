import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; // Importar MatDialogRef
import { Contenido } from '../model/contenido';
import { ContenidoService } from '../services/contenido.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contenido-puntuacion',
  templateUrl: './contenido-puntuacion.component.html',
  styleUrls: ['./contenido-puntuacion.component.css']
})
export class ContenidoPuntuacionComponent implements OnInit {

  public formPuntuacion!: FormGroup;
  public puntuacion!: number;
  public contenido!: Contenido;

  constructor(
    private dialogRef: MatDialogRef<ContenidoPuntuacionComponent>, // Inyectar MatDialogRef
    private servicioContenido: ContenidoService,
    @Inject(MAT_DIALOG_DATA) public data: Contenido
  ) { }

  ngOnInit(): void {
    console.log(this.data.id);
    this.cargarDatos();
    this.inicializarFormPuntuacion();
  }

  
  private cargarDatos(): void {
    this.servicioContenido.getContenidoById(this.data.id).subscribe(
      res => {
        this.contenido = res;
      },
      error => {
        console.error('Error al cargar los datos del contenido:', error);
      }
    );
  }

  private inicializarFormPuntuacion(): void {
    this.formPuntuacion = new FormGroup({
      puntuaciones: new FormControl(null, Validators.required)
    });
  }




}
