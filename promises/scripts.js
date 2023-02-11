function f(g, h){
    if (10 > 0){
        g("P");
    }else{
        h("Q");
    }
}



function executarSeRejeitar(valor){
    console.log("Rejeitada com o valor " + valor);
}

const minhaPromise = new Promise(f);

minhaPromise.then(valor => {
    console.log("Resolvida com o valor " + valor);
})
.catch(valor => {
    console.log("Rejeitada com o valor " + valor);
});
