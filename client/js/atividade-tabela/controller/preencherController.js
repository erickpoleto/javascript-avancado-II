class PreencherControler{

    constructor(){

        this._listaFuncionarios = new Lista();
        this._preencherView = new PreencherView($('#preenche'));
        this._preencherView.update(this._listaFuncionarios);

    }

    adicionar(){
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
        for( let i = 0; i < funcionarios.length; i++){
            this._listaFuncionarios.adiciona
            (this._criaListaFuncionarios(funcionarios[i]));
        }
        console.log(this._listaFuncionarios);
        this._preencherView.update(this._listaFuncionarios);
        
    }

    _criaListaFuncionarios(funcionarios = []){

        return new Funcionarios(funcionarios.nome, 
            funcionarios.endereco, funcionarios.salario);

    }    
}