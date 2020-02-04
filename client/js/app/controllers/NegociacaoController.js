class NegociacaoController{

    constructor(){
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new Lista();
        this._negociacoesView = new NegociacaoView($('#negociacoes-view'));

        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event){
        event.preventDefault();

        /*instanciando objeto helper e criando variável data*/
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();

        this._listaNegociacoes.lista.length = 0;

        console.log(this._listaNegociacoes.lista);

    }


    _criaNegociacao(){

        let data = DateHelper.textoParaData(this._inputData.value);

        return new Negociacao(
            data, 
            this._inputQuantidade.value,
            this._inputValor.value

        );

    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
    
}