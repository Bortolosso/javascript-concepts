function trabalhoexecutado(Trabalho1, Trabalho2) {
    const comprarSorvete = Trabalho1 || Trabalho2
    const comprarTV50 = Trabalho1 && Trabalho2
    const comprarTV32 = Trabalho1 != Trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(trabalhoexecutado(true, true))
console.log(trabalhoexecutado(true, false))
console.log(trabalhoexecutado(false, true))
console.log(trabalhoexecutado(false, false))