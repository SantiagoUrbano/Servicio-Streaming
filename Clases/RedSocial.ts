

class RedSocial {
    nombre: string;
    url: string;

    constructor(nombre: string, url: string) {
        this.nombre = nombre;
        this.url = url;
    }

    obtenerNombre() {
        return this.nombre;
    }

    obtenerUrl() {
        return this.url;
    }
}