class Funcionarios{

    constructor(nome, endereco, salario){
        this._nome = nome;
        this._endereco = endereco
        this._salario = salario;
        Object.freeze(this);
    }

    get nome(){
        return this._nome;
    }

    get endereco(){
        return this._endereco;
    }
    get salario(){
        return this._salario;
    }

}