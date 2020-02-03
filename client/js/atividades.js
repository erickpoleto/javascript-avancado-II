//trocando modo que data é exibida
let dataString = ('10-05-2019');

let data = new Date(dataString.split('-').reverse().join('/'));

console.log(data);

//numeros dobrados se forem par
let numeros = [3,2,11,20,8,7];

let novosNumeros = numeros.map(item =>  item % 2 ? item * 2 : item);

console.log(novosNumeros);

//validar codigos

class ValidaCodigos{
    
    static valida(codigo){
        if(!/^\d{4}-\d{2}-\d{2}$/.test(codigo)) throw new Error("deve estar no formato errado");
   }   
}

//lista de nomes

class Lista{

    constructor(){
        throw new Error('DateHelper cannot be instancied');
    }

    static mostraLista(...elementos){
        let listaNomes = [].concat(elementos)
        return console.log(listaNomes);
    }
}

//ou 

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
let lista = listaDeNomes1.concat(listaDeNomes2);

exibeNoConsole(lista);
