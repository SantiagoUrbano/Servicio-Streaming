"use strict";
exports.__esModule = true;
exports.Canal = void 0;
var Canal = /** @class */ (function () {
    function Canal(nombre, banner, streamer, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
        this.categorias = [];
    }
    Canal.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Canal.prototype.obtenerBanner = function () {
        return this.banner;
    };
    Canal.prototype.obtenerStreamer = function () {
        return this.streamer;
    };
    Canal.prototype.obtenerDescripcion = function () {
        return this.descripcion;
    };
    Canal.prototype.agregarCategoria = function (categoria) {
        this.categorias.push(categoria);
    };
    Canal.prototype.obtenerCategoria = function () {
        return this.categorias;
    };
    return Canal;
}());
exports.Canal = Canal;
