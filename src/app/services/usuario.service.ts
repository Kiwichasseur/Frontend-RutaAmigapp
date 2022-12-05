import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getAllUsuarios(route: string){
    return this.http.get(route)
  }

  saveUsuario(route: string,usuariodata:Usuario){
    let config:any = {
      responseType: "json"
    }
   
    //Notese que como tercer parametro se pasa la configuracion de la request
    return this.http.post(route, usuariodata, config);
    
  }
}
