

export interface Usuario {
    idusuario: number;
    nombre_usuario: string;
    apellido_usuario: string;
    correo_usuario: string;
    password_usuario: string;
    estado_usuario: boolean;
    fecha_creacion: string;
   /*  fecha_actualizacion: string;
    fecha_eliminacion: null; */
}


export class Usuario implements Usuario{
}