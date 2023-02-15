import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;



  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      nombreUsuario: ['', Validators.required],
      apellidoUsuario: ['', [Validators.required]],
      correoUsuario: ['', [Validators.email, Validators.required]],
      Password1: ['', [Validators.required]],
      Password2: ['', [Validators.required]]
    })
  }

  onRegistrar() {


    let usuario = {
      "nombre_usuario": "Camilo",
      "apellido_usuario": "Hernandez",
      "correo_usuario": "camilo222@gmail.com",
      "password_usuario": "A123bb9%",
      "estado_usuario": true
    }

    if (this.formRegister.valid) {
      usuario.nombre_usuario = this.formRegister.value.nombreUsuario
      usuario.apellido_usuario = this.formRegister.value.apellidoUsuario
      usuario.correo_usuario = this.formRegister.value.correoUsuario
      usuario.password_usuario = this.formRegister.value.Password1
      console.table(usuario)    
      
      fetch('http://localhost:3000/api/usuario/registro', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(usuario), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {
                    console.log(response.status)
                    if (response.usuario) {
                        console.log('Success:', response)
                        this.router.navigate(['/mapa'])
                        
                        /* document.getElementById('mensaje').classList.add('hidden')
                        document.getElementById('mensaje-error').innerHTML = '' */
                        //window.location = '/map';
                    } else {
                        console.log('Success:', response)
                        /* if (response.errors) {
                            document.getElementById('mensaje').classList.remove('hidden')
                            let errorMessague = []
                            response.errors.forEach(element => {
                                errorMessague.push(element.msg)
    
                            });
                            document.getElementById('mensaje-error').innerHTML = ''
                            errorMessague.forEach(element => {
                                document.getElementById('mensaje-error').innerHTML += `${element}<br>`
                            });
                        }
                        if (response.error) {
                            document.getElementById('mensaje').classList.remove('hidden')
                            document.getElementById('mensaje-error').innerHTML += `${response.error} <a href="registroDemo.html">Registrar</a>`
                        } */
                    }

                });
    }
  }

}
