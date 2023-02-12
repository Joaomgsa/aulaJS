const cep = '23071480';

const fetchresult = fetch(`https://viacep.com.br/ws/${cep}/json/`);


 async function getJsonResponse(url){
    const result = await fetch(url);
    const jsonBody = await result.json();
    return jsonBody;
 }

async function showCepData(cep){
    const url =`https://viacep.com.br/ws/${cep}/json/`;
    const json = getJsonResponse(url);
    console.log(json);
}

showCepData('23071480');

 // getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`);



 console.log("processado antes do Async")
 console.log("Apesar de estar no final do código ele é executado antes do Async")