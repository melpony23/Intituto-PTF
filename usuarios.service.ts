import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Usuario } from "src/app/models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarioURL='http://localhost:8080/api';
 
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'}) 
  }


  constructor(private http: HttpClient) { }

  obtenerUsuarios(correo: string):Observable<Usuario[]>{
    const url = '/usuario/obtener/';
    return this.http.get<Usuario[]>(this.usuarioURL+url+correo);  }

    agregarUsuario(usuario:Usuario): Observable<Usuario>{
      const url = '/usuario/insertar/';
      return this.http.post<Usuario>(this.usuarioURL + url , usuario, this.httpOptions);
  }

  borrarUsuario (correo:string){
     const url = '/usuario/borrar/';
     return this.http.delete<Usuario>(this.usuarioURL + url + correo);
  }
  actualizarUsuario(usuario:Usuario){
    const url = '/usuariomodificar/';
    return this.http.put<Usuario>(this.usuarioURL+url+usuario.correo,usuario)
  }

  getUsuario(correo:string):Observable<Usuario[]>{
    const url = '/usuario/obtener/';
    return this.http.get<Usuario[]>(this.usuarioURL+url+correo);
  }

 }


