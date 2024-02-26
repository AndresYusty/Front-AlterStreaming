import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../services/contenido.service';
import { Contenido } from '../model/contenido';
import { MatDialog } from '@angular/material/dialog';
import { ContenidoAleatorioComponent } from '../contenido-aleatorio/contenido-aleatorio.component';
import { ContenidoPuntuacionComponent } from '../contenido-puntuacion/contenido-puntuacion.component';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  public contenido: Contenido[] = [];
  public filtroGlobal: string = '';

  constructor(
    private servicioContenido: ContenidoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listarContenido();
    this.filtrarContenido();
  }

  public filtrarContenido(): void {
    this.servicioContenido.listarTodoContenido().subscribe(
      res => {
        this.contenido = res.filter(item =>
          item.nombre.toLowerCase().includes(this.filtroGlobal.toLowerCase()) ||
          item.tipo.toLowerCase().includes(this.filtroGlobal.toLowerCase()) ||
          item.genero.tipo.toLowerCase().includes(this.filtroGlobal.toLowerCase())
        );
      },
      error => {
        console.log("Ha ocurrido un error al filtrar el contenido:", error);
      }
    );
  }

  public onFiltroGlobalChange(event: any): void {
    this.filtroGlobal = event.target.value;
    this.filtrarContenido();
  }

  public listarContenido(): void {
    this.servicioContenido.listarTodoContenido().subscribe(
      res => {
        this.contenido = res;
      },
      error => {
        console.log("Ha ocurrido un error al listar el contenido:", error);
      }
    );
  }

  public contenidoAleatorio(): void {
    this.servicioContenido.getRandomMovie().subscribe(
      contenidoAleatorio => {
        this.dialog.open(ContenidoAleatorioComponent, {
          height: '270px',
          width: '800px',
          data: contenidoAleatorio // Pasamos el contenido aleatorio como data al diálogo
        });
      },
      error => {
        console.error("Ha ocurrido un error al obtener el contenido aleatorio:", error);
      }
    );
  }

  public modalPuntuar(id: number): void {
    const dialogRef = this.dialog.open(ContenidoPuntuacionComponent, {
      height: '250px',
      width: '300px',
      data: {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.listarContenido();
      }
    });
  }
}
