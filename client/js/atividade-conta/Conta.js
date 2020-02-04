class Conta{

    constructor(saldo){
        this._saldo = saldo;
    }

    atualiza(taxa){
        throw new Error('o metodo atualiza deve ser sobrescrito');
    }

    get saldo(){
        return this._saldo;
    }
}