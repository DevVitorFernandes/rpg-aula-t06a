const TESTE = false; // true = a sorte fica fixa, para o roteiro de teste


function sortear(chance) {
    let sorte = Math.random();
    if (TESTE) {
        sorte = 0.2;
    }
    return sorte < chance
}


module.exports = sortear;