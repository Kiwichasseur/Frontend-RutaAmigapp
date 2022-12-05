import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register-usuario',
  templateUrl: './register-usuario.component.html',
  styleUrls: ['./register-usuario.component.css']
})
export class RegisterUsuarioComponent implements OnInit {

  usuario = {
    nombre_usuario: '',
    apellido_usuario: '',
    correo_usuario: '',
    password_usuario: '',
    estado_usuario: true
  }

  mensajeFinal:any;
  

  mensaje = false
  mensajeError = false

  

  constructor(private usuarioservice: UsuarioService) { 
    
  }


  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    if (f.valid == false) {
      this.mensaje = false
      this.mensajeError = true
    } else {
      
      
      let data:Usuario = f.value
      data.estado_usuario= true
      this.usuarioservice.saveUsuario('http://localhost:6060/app/registro',data).subscribe(
        //capturamos el valor de descarga emitido por next() del observable y extraemos del json
        //el valor de la porpiedad "datos" con el cual definimos la porpiedad productos que estamos
        //interpolando en el HTML
       
       
        
        (data): any => { 
          console.log(data);
          this.mensajeFinal = data 
          this.mensaje = true
        },
        error => console.log("Ha ocurrido un error en la llamada: ", error))
    }
    f.resetForm()
    this.mensajeError = false
  }
  //!f.valid?this.mensajeError=true:this.mensajeError=false
}

  