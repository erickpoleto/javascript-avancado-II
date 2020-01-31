/*trocando modo que data é exibida*/
let dataString = ('10-05-2019');

let data = new Date(dataString.split('-').reverse().join('/'));

console.log(data);

/*numeros dobrados se forem par*/
let numeros = [3,2,11,20,8,7];

let novosNumeros = numeros.map(item =>  item % 2 ? item * 2 : item);

console.log(novosNumeros);