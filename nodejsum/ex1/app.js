const Usuarios = require('./usuario')

const usuarios = new Usuarios('./usuarios.txt')

console.log(usuarios.lerUsuarios())