function tratarErroELancar(erro) {
    // throw 10
    // throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
   
}

function imprimirNomeGritado(obj) {
    try { // try =  tentar
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // O bloco catch sera executado caso o bloco try aja algum erro.
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)