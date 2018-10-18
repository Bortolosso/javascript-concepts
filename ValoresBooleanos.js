let teste = false
console.log(teste)

teste =  true
console.log (teste)

teste =  1  // 1 = true / 0 = false
console.log(!!teste) //comando !! manda o JS a dizer o valor booleano.

console.log('OS VERDADEIROS...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'string')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(teste = true))

console.log('OS FALSOS...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN) //NaN = Not a Number
console.log(!!undefined)
console.log(teste = false)

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // Se apenas um dos valores for true o resultado final sera true.
console.log(('' || null || 0 || 'valuetrue' || 123 )) // Nesse caso, sera exibido no console o primeiro valor true.

//EXEMPLO UTILIZANDO --> || = ou

let nome = '' //Caso o "usuario" não colocar um valor sera exibido uma segunda opcao como em baixo.
console.log(nome || 'Desconhecido') 
