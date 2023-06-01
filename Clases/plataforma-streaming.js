"use strict";
exports.__esModule = true;
exports.Plataforma = void 0;
var Plataforma = /** @class */ (function () {
    function Plataforma(nombre, logo, descripcion, empresa) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.canales = [];
    }
    Plataforma.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Plataforma.prototype.obtenerLogo = function () {
        return this.logo;
    };
    Plataforma.prototype.obtenerDescripcion = function () {
        return this.descripcion;
    };
    Plataforma.prototype.obtenerEmpresa = function () {
        return this.empresa;
    };
    Plataforma.prototype.agregarCanal = function (canal) {
        this.canales.push(canal);
    };
    Plataforma.prototype.obtenerCanales = function () {
        return this.canales;
    };
    return Plataforma;
}());
exports.Plataforma = Plataforma;
