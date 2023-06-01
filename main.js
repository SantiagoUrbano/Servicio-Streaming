"use strict";
exports.__esModule = true;
var canal_js_1 = require("./Clases/canal.js");
var categoria_js_1 = require("./Clases/categoria.js");
var plataforma_streaming_js_1 = require("./Clases/plataforma-streaming.js");
var RedSocial_js_1 = require("./Clases/RedSocial.js");
var streamer_js_1 = require("./Clases/streamer.js");
// Creacion de la plataforma, creación del streamer y sus redes sociales
var nuevaPlataforma = new plataforma_streaming_js_1.Plataforma('Bytay', 'Bytay.jpg', 'Bytay es una nueva plataforma en la cual muchas personas ingresan para obtener un rato de entretenimiento', 'Bytay SAS');
var nuevoStreamer = new streamer_js_1.Streamer('Nicko', 'Nicko es un jugador explendido a la hora de jugar valorant y siendo reconocido por la comunidad');
var nuevaRedSocial = new RedSocial_js_1.RedSocial('Nickoxx', 'instagram.com/Nickoxx');
nuevoStreamer.agregarRedSocial(nuevaRedSocial);
// Creacion del canal y categoria, para luego realizar el push
var nuevoCanal = new canal_js_1.Canal('Nickozz playxd', 'Nickozz.png', nuevoStreamer, 'En este canal pasar un rato divertido, aqui jugamos un poco de todo uwu');
var nuevaCategoria = new categoria_js_1.Categoria('Acción', 'Juegos de disparos en linea', 'Accion.png');
nuevoCanal.agregarCategoria(nuevaCategoria);
// agregar el canal a la plataforma 
nuevaPlataforma.agregarCanal(nuevoCanal);
// Obtención de los datos para verlos en consola
console.log('Plataforma: ', nuevaPlataforma.obtenerNombre());
console.log('Streamer: ', nuevoStreamer.descripcion);
console.log('Redes sociales: ', nuevoStreamer.redesSociales);
console.log('Canales: ');
nuevaPlataforma.obtenerCanales().forEach(function (nuevoCanal) {
    console.log("  - Nombre:", nuevoCanal.obtenerNombre());
    console.log("    Descripción:", nuevoCanal.obtenerDescripcion());
    console.log("    Streamer:", nuevoCanal.obtenerStreamer().obtenerNickname());
    console.log("    Categorías:");
    nuevoCanal.obtenerCategoria().forEach(function (nuevaCategoria) {
        console.log("  - Nombre:", nuevaCategoria.obtenerNombre());
        console.log("  - Descripción:", nuevaCategoria.obtenerDescripcion());
    });
});
