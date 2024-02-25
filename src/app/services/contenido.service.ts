import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contenido } from '../model/contenido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  private path: string = environment.urlApi+ '/contenido';

  //El http client hace las peticiones
  constructor(
    private http : HttpClient
  ) { }


  public listarTodoContenido(){
    return this.http.get<Contenido[]>(this.path);
  }
  
  
  public listarByName(): Observable<Contenido[]> {
    return this.http.get<Contenido[]>(`${this.path}/nameDes`);
  }

  public listarByType(): Observable<Contenido[]> {
    return this.http.get<Contenido[]>(`${this.path}/type`);
  }

  public listarByGeneroId(idGenero: number): Observable<Contenido[]> {
    return this.http.get<Contenido[]>(`${this.path}/contenido-genero?idGenero=${idGenero}`);
  }

}
