import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../services/contenido.service';
import { Contenido } from '../model/contenido';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  public Contenido: Contenido[] = [];

  constructor(
    private servicioContenido: ContenidoService,
  
  ) { }


  ngOnInit(): void {

    this.listarContenido();

   // this.servicioContenido.listarByName().subscribe(res => {
     // console.log(res);
    //}, error=>{
      //console.log("Ha ocurrido un erro al traer la informacion")
    //})

  }

  public listarContenido(){

    this.servicioContenido.listarTodoContenido().subscribe(res=>{

      this.Contenido= res;

     },error=>{
      console.log("Ha ocurrido un error al listar")
     });

  }


}
