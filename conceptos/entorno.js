let nombre = process.env.NOMBRE || 'Sin nombre';//Es buena practica usar esta convencion con mayusculas, especialmente para variables de entorno que vengan de fuera.
let web = process.env.MI_WEB || 'no tengo web';

console.log(`Hola ${nombre}`);
console.log(`Mi web es ${web}`);

console.log('creo que ya tengo mi watcher');
