import { Canal } from "./canal.js";


export class Plataforma {
    nombre: string;
    logo: string;
    descripcion: string;
    empresa: string;
    canales: Canal[];

    constructor(nombre: string, logo: string, descripcion: string, empresa: string) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.canales = [];
    }

    obtenerNombre() {
        return this.nombre;
    }

    obtenerLogo() {
        return this.logo;
    }

    obtenerDescripcion() {
        return this.descripcion;
    }

    obtenerEmpresa() {
        return this.empresa;
    }

    agregarCanal(canal: Canal): void {
        this.canales.push(canal);
    }

    obtenerCanales(): Canal[] {
        return this.canales;
    }
}
