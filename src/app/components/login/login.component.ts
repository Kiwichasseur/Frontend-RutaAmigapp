import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public email:string;
    public password:string;

    constructor(private router:Router) { }

    ngOnInit(): void {
    
    }

    onIngresar(dataInfo) {

        /* e.preventDefault(); */
        
        console.log(dataInfo.email)
        console.log(dataInfo.password)

        let data = {
            correo_usuario: dataInfo.email,
            password_usuario: dataInfo.password
        }


        fetch('http://localhost:6060/app/login', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if (response.estado) {
                    console.log('Success:', response)
                    this.router.navigate(['/map'])
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
