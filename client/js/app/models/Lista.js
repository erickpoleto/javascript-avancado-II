class Lista{

    constructor(/*contexto,*/ /*atualiza*/){
        
        this._lista = [];
        //this._atualiza = atualiza;
        //this._contexto = contexto;
    }

    adiciona(lista){

        this._lista.push(lista);
        //this._atualiza(this);
        //Reflect.apply(this._atualiza, this._contexto, [this]);
    }

    esvazia(){

        this._lista = [];
        //this._atualiza(this);
        //Reflect.apply(this._atualiza, this._contexto, [this]);
    }

    ordena(criterio){
        this._lista.sort(criterio);
    }

    inverteOrdem(){
        this._lista.reverse();
    }

    get lista(){
        
        return [].concat(this._lista);
        
    }


}