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
 /*  usuarios =
    [
      {
        "idusuario": 1,
        "nombre_usuario": "Cristian A",
        "apellido_usuario": "Hernandez",
        "correo_usuario": "pandorahhjj33@gmail.com",
        "password_usuario": "aC1234567.",
        "estado_usuario": false,
        "fecha_creacion": "2022-11-08T03:36:23.942Z",
        "fecha_actualizacion": "2022-11-08T03:36:23.942Z",
        "fecha_eliminacion": null
      },
      {
        "idusuario": 2,
        "nombre_usuario": "Cristian A",
        "apellido_usuario": "Hernandez",
        "correo_usuario": "pandor3asdfasdf@gmail.com",
        "password_usuario": "aC1234567.",
        "estado_usuario": true,
        "fecha_creacion": "2022-11-08T05:49:02.645Z",
        "fecha_actualizacion": "2022-11-08T05:49:02.645Z",
        "fecha_eliminacion": null
      },
      {
        "idusuario": 3,
        "nombre_usuario": "Nuevo Usuario",
        "apellido_usuario": "Hernandez",
        "correo_usuario": "nuevousuario@gmail.com",
        "password_usuario": "aC1234567.",
        "estado_usuario": true,
        "fecha_creacion": "2022-11-08T05:58:10.062Z",
        "fecha_actualizacion": "2022-11-08T05:58:10.062Z",
        "fecha_eliminacion": null
      },
      {
        "idusuario": 4,
        "nombre_usuario": "Nuevo Usuario",
        "apellido_usuario": "Hernandez",
        "correo_usuario": "nuevousuario2@gmail.com",
        "password_usuario": "aC1234567.",
        "estado_usuario": true,
        "fecha_creacion": "2022-11-08T06:10:32.653Z",
        "fecha_actualizacion": "2022-11-08T06:10:32.653Z",
        "fecha_eliminacion": null
      },
      {
        "idusuario": 6,
        "nombre_usuario": "carlos",
        "apellido_usuario": "diaz",
        "correo_usuario": "carlosDiaz@hotmail.com",
        "password_usuario": "Cd1234$.",
        "estado_usuario": true,
        "fecha_creacion": "2022-11-13T05:56:34.403Z",
        "fecha_actualizacion": "2022-11-13T05:56:34.403Z",
        "fecha_eliminacion": null
      },
      {
        "idusuario": 7,
        "nombre_usuario": "carlos",
        "apellido_usuario": "diaz",
        "correo_usuario": "carlosDiaz23@hotmail.com",
        "password_usuario": "Ch1234$.",
        "estado_usuario": true,
        "fecha_creacion": "2022-11-13T05:58:06.661Z",
        "fecha_actualizacion": "2022-11-13T05:58:06.661Z",
        "fecha_eliminacion": null
      },
      {
        "idusuario": 8,
        "nombre_usuario": "carlos",
        "apellido_usuario": "diaz",
        "correo_usuario": "carlosDiaz34@hotmail.com",
        "password_usuario": "Ch1234$.",
        "estado_usuario": true,
        "fecha_creacion": "2022-11-13T05:58:46.538Z",
        "fecha_actualizacion": "2022-11-13T05:58:46.538Z",
        "fecha_eliminacion": null
      },
      {
        "idusuario": 9,
        "nombre_usuario": "carlos",
        "apellido_usuario": "diaz",
        "correo_usuario": "pandorahhjj00@gmail.com",
        "password_usuario": "Ch1234$.",
        "estado_usuario": true,
        "fecha_creacion": "2022-11-13T06:05:22.497Z",
        "fecha_actualizacion": "2022-11-13T06:05:22.497Z",
        "fecha_eliminacion": null
      },
      {
        "idusuario": 10,
        "nombre_usuario": "carlos",
        "apellido_usuario": "diaz",
        "correo_usuario": "carlosDiaz09@hotmail.com",
        "password_usuario": "Ch12345$.",
        "estado_usuario": true,
        "fecha_creacion": "2022-11-13T06:07:09.725Z",
        "fecha_actualizacion": "2022-11-13T06:07:09.725Z",
        "fecha_eliminacion": null
      },
      {
        "idusuario": 11,
        "nombre_usuario": "carlos",
        "apellido_usuario": "diaz",
        "correo_usuario": "pandorahhjj3300@gmail.com",
        "password_usuario": "Ch13434.$",
        "estado_usuario": true,
        "fecha_creacion": "2022-11-13T06:09:31.323Z",
        "fecha_actualizacion": "2022-11-13T06:09:31.323Z",
        "fecha_eliminacion": null
      },
      {
        "idusuario": 12,
        "nombre_usuario": "carlos",
        "apellido_usuario": "diaz",
        "correo_usuario": "pandorahhj99@gmail.com",
        "password_usuario": "1234Ch.$",
        "estado_usuario": true,
        "fecha_creacion": "2022-11-13T06:11:13.756Z",
        "fecha_actualizacion": "2022-11-13T06:11:13.756Z",
        "fecha_eliminacion": null
      },
      {
        "idusuario": 13,
        "nombre_usuario": "carlos",
        "apellido_usuario": "diaz",
        "correo_usuario": "pandorahhj66@gmail.com",
        "password_usuario": "C234$qw%.$",
        "estado_usuario": true,
        "fecha_creacion": "2022-11-13T06:12:26.823Z",
        "fecha_actualizacion": "2022-11-13T06:12:26.823Z",
        "fecha_eliminacion": null
      },
      {
        "idusuario": 14,
        "nombre_usuario": "carlos",
        "apellido_usuario": "diaz",
        "correo_usuario": "pandorahhj90@gmail.com",
        "password_usuario": "12234$Ch.",
        "estado_usuario": true,
        "fecha_creacion": "2022-11-13T06:13:28.109Z",
        "fecha_actualizacion": "2022-11-13T06:13:28.109Z",
        "fecha_eliminacion": null
      }
    ] */

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
