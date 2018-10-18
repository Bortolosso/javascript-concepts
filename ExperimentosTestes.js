let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = "teste"

console.log(a) //imprime "a"
console.log(global.b) //imprime "b"
console.log(this.c) //imprime "c"
console.log(module.exports.c) //imprime "c"
console.log(module.exports === this) //imprime o valor booleano
console.log(module.exports) //imprime todas a variaveis

// Criando variavel sem var e let

teste = 3 //nao fazer isso pois o resultado sera "undefined"
console.log(global.abc)