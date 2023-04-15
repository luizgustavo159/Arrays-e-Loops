//Array(lista)
let ListaPaises = ['Brasil', 'Portugal', 'China', 'Alemanha', 'Inglaterra'];
//add ultimo
ListaPaises.push('Argentina');
console.log(ListaPaises);
//remove ultimo
ListaPaises.pop();
console.log(ListaPaises);
//add primeiro
ListaPaises.unshift('EUA');
console.log(ListaPaises);
//remove primeiro
ListaPaises.shift();
console.log(ListaPaises);
//ultimo da lista
console.log(ListaPaises[ListaPaises.length -1]);
//segundo da lista
console.log(ListaPaises[1]);
// indice === 2
console.log(ListaPaises[2]);