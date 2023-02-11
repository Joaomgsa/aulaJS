function dizerola() {
    console.log("Ola");
}


//setTimeout(dizerola, 2000);
function  dizerbomdia(nome) {
    console.log("Bom dia " + nome);
}

setTimeout(() => {
    dizerbomdia("Maria");
}, 2000);

console.log("Antes do setTimeout");
console.log("A");


//Como é a ordem de execução do código acima?
