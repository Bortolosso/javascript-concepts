console.log(Math.ceil(6.1)) // Math.ceil (x) devolve o valor de x arredondado para cima para o seu valor inteiro mais próximo

const obj1 = {}
obj1.nome = "Bola"
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome
    this.exec = function(){
        console.log("Teste...")
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()