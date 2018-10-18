let valor
console.log(valor) // undefined

valor = null
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {} // undefined
console.log(produto.preco)
console.log(produto)

produto.preco = 5
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)