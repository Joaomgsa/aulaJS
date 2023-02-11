function esperar(ms){
    const end = Date.now() + ms;
    
    while(Date.now() < end){

    }
}

console.log("Iniciando");
debugger
esperar(5000);
console.log("Depois de esperar 5 segundos");