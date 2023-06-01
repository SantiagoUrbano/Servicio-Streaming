"use strict";
exports.__esModule = true;
exports.Streamer = void 0;
var Streamer = /** @class */ (function () {
    function Streamer(nickname, descripcion) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = [];
    }
    Streamer.prototype.obtenerNickname = function () {
        return this.nickname;
    };
    Streamer.prototype.obtenerDescripcion = function () {
        return this.descripcion;
    };
    Streamer.prototype.agregarRedSocial = function (RedSocial) {
        this.redesSociales.push(RedSocial);
    };
    Streamer.prototype.obtenerRedesSociales = function () {
        return this.redesSociales;
    };
    return Streamer;
}());
exports.Streamer = Streamer;
