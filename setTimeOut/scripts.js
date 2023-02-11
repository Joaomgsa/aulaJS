function dizerola() {
    console.log("Ola");
}


//setTimeout(dizerola, 2000);
function  dizerbomdia(nome) {
    console.log("Bom dia " + nome);
}

setTimeout(() => {
    dizerbomdia("Maria");
    setTimeout(() => {
        dizerbomdia("João");
        setTimeout(() => {
            dizerbomdia("Ana");
        }, 2000);
    }, 2000);
}, 2000);

console.log("A");
console.log("B");
