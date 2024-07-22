console.log('Hola mundo!');

let i = 0;
setInterval(() => {
  console.log(i);
  i++;

  // if(i === 5){
  //   console.error('Ocurrio un grave error!');
  //   let a = 3  + z;
  // }
}, 1000);

console.log('segunda ejecucion');


//Es clave estar pendiente de todos los errores que pueda cortar la ejecución, lo que se corta corta todo. Todo lo que sea asíncono y lo puedas llevar a ello, pues llevalo, y todo lo que no, revisa que no corte el programa.