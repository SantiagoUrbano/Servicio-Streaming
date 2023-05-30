

class Canal {
    nombre: string;
    banner: string;
    streamer: Streamer;
    descripcion: string;

    constructor(nombre: string, banner: string, streamer:Streamer, descripcion: string) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
    }

    obtenerNombre() {
        return this.nombre;
    }

    obtenerBanner() {
        return this.banner;
    }

    obtenerStreamer(): Streamer {
        return this.streamer;
    }

    obtenerDescripcion() {
        return this.descripcion;
    }
}