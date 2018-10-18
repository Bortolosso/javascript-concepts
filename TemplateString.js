const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// Expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // toUpperCase responsavel por deixar todos os caracteres da string em MAISCULOS !  
console.log(`Ei... ${up('cuidado')}!`)