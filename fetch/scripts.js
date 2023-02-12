const cep = '23071480';

const fetchresult = fetch('https://viacep.com.br/ws/'+cep+'/json/');

fetchresult
    .then(response => {
        console.log("Sucesso ao buscar o CEP", response);
        const json = response.json();
        json
            .then(result => {
                console.log("Sucesso no JSON", result);
            })
            .catch(error => {
                console.log("Erro no JSON", error);
            });
        
    })
    .catch(error => {
        console.log("Erro no fetch", error);
    })

    Console.log("A");
    Console.log("Antes da requisição");