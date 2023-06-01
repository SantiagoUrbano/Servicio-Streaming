"use strict";
exports.__esModule = true;
exports.RedSocial = void 0;
var RedSocial = /** @class */ (function () {
    function RedSocial(nombre, url) {
        this.nombre = nombre;
        this.url = url;
    }
    RedSocial.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    RedSocial.prototype.obtenerUrl = function () {
        return this.url;
    };
    return RedSocial;
}());
exports.RedSocial = RedSocial;
