import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    formLogin: FormGroup;

    public email: string;
    public password: string;

    constructor(private fb: FormBuilder, private router: Router) { }

    ngOnInit(): void {
        this.formLogin = this.fb.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', [Validators.required]]
        })

    }

    onIngresar() {

        /* event.preventDefault(); */

        let usuario = {
            "correo_usuario": "",
            "password_usuario": ""
        }



        if (this.formLogin.valid) {
            usuario.correo_usuario = this.formLogin.value.email
            usuario.password_usuario = this.formLogin.value.password
            console.log(this.formLogin.value.email)
            console.log(this.formLogin.value.password)

            fetch('http://localhost:3000/api/auth/login', {
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
