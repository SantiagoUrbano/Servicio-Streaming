

export class Categoria {
    nombre: string;
    descripcion: string;
    imagen: string;

    constructor(nombre: string, descripcion: string, imagen: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    obtenerNombre() {
        return this.nombre;
    }

    obtenerDescripcion() {
        return this.descripcion;
    }

    obtenerImagen(){
        return this.imagen;
    }
}