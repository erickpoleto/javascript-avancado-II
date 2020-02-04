class PreencherControler{

    constructor(){

        this._listaFuncionarios = new Lista();
        this._preencherView = new PreencherView($('#preenche'));
        this._preencherView.update(this._listaFuncionarios);

    }

    adicionar(){
        this._listaFuncionarios.adiciona(this._criaListaFuncionarios());
        console.log(this._listaFuncionarios);
        /*for(let i=0; i<this._listaFuncionarios.lista.length; i++){
            this._preencherView.update(this._listaFuncionarios);
        }*/

    }

    _criaListaFuncionarios(){
        
        let funcionarios = [
            {
                "nome": "Douglas",
                "endereco" : "Rua da esquina, 123",
                "salario" : "4500"
            },
            {
                "nome": "Felipe",
                "endereco" : "Rua da virada, 456",
                "salario" : "5000"
            },
            {
                "nome": "Silvio",
                "endereco" : "Rua da aresta, 789",
                "salario" : "6000"
            }
        ];

        //return new Funcionarios(funcionarios[1].nome, funcionarios[1].endereco, funcionarios[1].salario);

        return funcionarios.map(i => new Funcionarios(i.nome, i.endereco, i.salario));
    }    
}