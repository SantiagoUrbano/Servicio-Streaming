import { Categoria } from "./categoria.js";
import { Streamer } from "./streamer.js";


export class Canal {
    nombre: string;
    banner: string;
    streamer: Streamer;
    descripcion: string;
    categorias: Categoria[]

    constructor(nombre: string, banner: string, streamer:Streamer, descripcion: string) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
        this.categorias = []
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

    agregarCategoria(categoria: Categoria): void {
        this.categorias.push(categoria);
    }

    obtenerCategoria(): Categoria[] {
        return this.categorias;
    }
}