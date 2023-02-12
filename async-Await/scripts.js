const cep = '23071480';

const fetchresult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

fetchresult.then(value =>{
    console.log(value);
});

 async function getJsonResponse(url){
    const result = await fetch(url);
    console.log(result)
 }

 getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`);

 console.log("processado antes do Async")
 console.log("Apesar de estar no final do código ele é executado antes do Async")