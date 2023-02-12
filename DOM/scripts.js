const item1 = document.querySelector('li');
console.log(item1);
console.log(item1.innerHTML);
console.log(item1.outerHTML);

//colocando todos os itens LI dentro de uma nodelist
const items = document.querySelectorAll('li');
console.log(items);

const card1 = document.querySelector('.card');

console.log(card1);

const paragrafo = document.createElement('p');
paragrafo.innerText = "Par�grafo inserido via JS";
card1.appendChild(paragrafo);
card1.classList.add('super-border');

const cards = document.querySelectorAll('.card');
console.log(cards);

Array.from(cards).forEach(card => {
    console.log(card.innerHTML);
});