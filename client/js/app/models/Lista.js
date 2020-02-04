class Lista{

    constructor(){
        
        this._lista = [];

    }

    adiciona(lista){
        this._lista.push(lista);
    }

    get lista(){
        
        return [].concat(this._lista);

    }

}