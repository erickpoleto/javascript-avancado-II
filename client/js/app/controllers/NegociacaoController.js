class NegociacaoController{

    constructor(){

        this._inputData = $('#data');

        this._inputQuantidade = $('#quantidade');

        this._inputValor = $('#valor');

        this._form = $('.form');

        this._importaNegociacoes = $('#importa-negociacoes');

        this._apagar = $('.botao-apagar');

        this._listaNegociacoes = new Bind(
            new Lista(), new NegociacaoView($('#negociacoes-view')), 'adiciona', 'esvazia', 'importaNegociacoes');
        /*
        this._listaNegociacoes = ProxyFactory.createProxy(
            new Lista(), ['adiciona','esvazia'], (model) => 
            this._negociacoesView.update(model));
        */
        //this._listaNegociacoes = new Lista(/*this,*/ model =>
          //  this._negociacoesView.update(model)
        //);
        this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagem-alerta')), 'texto');

        /*this._mensagem = ProxyFactory.createProxy(
            new Mensagem(), ['texto'], model => 
            this._mensagemView.update(model));
        */
        
    }

    adiciona(event){
        event.preventDefault();

        /*instanciando objeto helper e criando variável data*/
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação adicionada com sucesso";
        this._limpaFormulario();

        console.log(this._listaNegociacoes.lista);

    }

    apaga(){

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'lista de negociacões apagada';
        this._mensagemView.update(this._mensagem);
    }

    importaNegociacoes(){
        
       let services = new NegociacaoService();
       services.importaNegociacaoService((err, negociacoes) => {
            if(err){
                this._mensagem.texto = err;
                return;
            }
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações importadas com sucesso";
       });
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