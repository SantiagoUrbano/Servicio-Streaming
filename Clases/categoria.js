"use strict";
exports.__esModule = true;
exports.Categoria = void 0;
var Categoria = /** @class */ (function () {
    function Categoria(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    Categoria.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Categoria.prototype.obtenerDescripcion = function () {
        return this.descripcion;
    };
    Categoria.prototype.obtenerImagen = function () {
        return this.imagen;
    };
    return Categoria;
}());
exports.Categoria = Categoria;
