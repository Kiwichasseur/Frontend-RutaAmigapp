import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuarioservice: UsuarioService) { }

  usuarios =[]

  ngOnInit(): void {
   
     //la descarga esperada o un error
     this.usuarioservice.getAllUsuarios('https://backendrutamiappbackservice.onrender.com/app/usuario').subscribe(
      //capturamos el valor de descarga emitido por next() del observable y extraemos del json
      //el valor de la porpiedad "datos" con el cual definimos la porpiedad productos que estamos
      //interpolando en el HTML
      (data): any => { this.usuarios = Object.values(data);console.log(data);},
      error => console.log("Ha ocurrido un error en la llamada: ", error))
    
  }

}
