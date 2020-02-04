class ContaPoupanca extends Conta{

    constructor(saldo){
        super(saldo);
    }

    atualiza(taxa){
        this._saldo = this.saldo + taxa * 2;  
    }

}