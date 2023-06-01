import { Canal } from './Clases/canal.js'
import { Categoria } from './Clases/categoria.js'
import { Plataforma } from './Clases/plataforma-streaming.js'
import { RedSocial } from './Clases/RedSocial.js'
import { Streamer } from './Clases/streamer.js'

// Creacion de la plataforma, creación del streamer y sus redes sociales

const nuevaPlataforma = new Plataforma (
    'Bytay',
    'Bytay.jpg',
    'Bytay es una nueva plataforma en la cual muchas personas ingresan para obtener un rato de entretenimiento',
    'Bytay SAS');

const nuevoStreamer = new Streamer(
    'Nicko',
    'Nicko es un jugador explendido a la hora de jugar valorant y siendo reconocido por la comunidad'
);

const nuevaRedSocial = new RedSocial(
    'Nickoxx',
    'instagram.com/Nickoxx'
);
nuevoStreamer.agregarRedSocial(nuevaRedSocial);

// Creacion del canal y categoria, para luego realizar el push

const nuevoCanal = new Canal(
    'Nickozz playxd',
    'Nickozz.png',
    nuevoStreamer,
    'En este canal pasar un rato divertido, aqui jugamos un poco de todo uwu'
);

const nuevaCategoria = new Categoria (
    'Acción',
    'Juegos de disparos en linea',
    'Accion.png'
);
nuevoCanal.agregarCategoria(nuevaCategoria);

// agregar el canal a la plataforma 

nuevaPlataforma.agregarCanal(nuevoCanal);

// Obtención de los datos para verlos en consola

console.log('Plataforma: ', nuevaPlataforma.obtenerNombre());
console.log('Streamer: ', nuevoStreamer.descripcion);
console.log('Redes sociales: ',nuevoStreamer.redesSociales);
console.log('Canales: ');
nuevaPlataforma.obtenerCanales().forEach((nuevoCanal) => {
    console.log("  - Nombre:", nuevoCanal.obtenerNombre());
    console.log("    Descripción:", nuevoCanal.obtenerDescripcion());
    console.log("    Streamer:", nuevoCanal.obtenerStreamer().obtenerNickname());
    console.log("    Categorías:");

    nuevoCanal.obtenerCategoria().forEach((nuevaCategoria) => {
        console.log("  - Nombre:",nuevaCategoria.obtenerNombre());
        console.log("  - Descripción:",nuevaCategoria.obtenerDescripcion());
    });
});

