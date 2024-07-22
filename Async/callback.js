const hello = (name, miCallback) => {
  setTimeout(() => {
    console.log(`Hi ${name}`);//2do console.log.
    miCallback(name);
  }, 2000)
};

const seeYou = (name, anotherCallback) => {
  setTimeout(() => {
    console.log(`see you ${name}`);
    anotherCallback();
  }, 1000)
};

console.log('process init...');//1er console.log().
hello('milton', (nombre) => (
  seeYou(nombre, () => (
  console.log('terminando proceso...'))
)));




