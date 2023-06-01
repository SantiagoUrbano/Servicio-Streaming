import { RedSocial } from "./RedSocial.js";


export class Streamer {
    nickname: string;
    descripcion: string;
    redesSociales: RedSocial[]

    constructor(nickname: string, descripcion: string) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = [];
    }

    obtenerNickname() {
        return this.nickname;
    }

    obtenerDescripcion() {
        return this.descripcion;
    }

    agregarRedSocial(RedSocial: RedSocial): void {
        this.redesSociales.push(RedSocial);
    } 

    obtenerRedesSociales(): RedSocial[] {
        return this.redesSociales;
    }
}