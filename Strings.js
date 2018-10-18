const escola = "Cod3r"

console.log(escola.charAt(2)) //chatArt responsalvel por indicar a respectiva caractere
console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(3)) // exibir caracteres a seguir da qual declarada
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) // OU console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) //substituicao 
console.log('Ana,Maria,Pedro'.split(','))