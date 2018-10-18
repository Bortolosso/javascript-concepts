const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
//responsavel por rodar expecificamente esses valores no loop :
funcs[2]()
funcs[6]()
funcs[8]()