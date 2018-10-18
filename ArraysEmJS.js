const valores = [0, 1, 2, 3]
console.log(valores[0], valores[3])
console.log(valores[4]) // Com o array "[4]" declarado a linguagem JS entende como valor falso, nulo ou indefinido, pois o  valor não esta declarado na array da variavel valores.

valores[4] = 20
//console.log(valores[0, 1, 2, 3, 4]);
console.log(valores)
console.log(valores.length) // Comando length é usado para declarar a quantidade de elementos da array "valores" do respectivo código (linha 1).
valores.push({id: 3}, false, null, "teste")
console.log(valores)

console.log(valores.pop())
delete valores [0, 1]
console.log(typeof valores) //arrays em Javascript são objetos.



