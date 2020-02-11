class NegociacaoController{

    constructor(){

        this._inputData = $('#data');

        this._inputQuantidade = $('#quantidade');

        this._th = $('th');

        this._inputValor = $('#valor');

        this._form = $('.form');

        this._importaNegociacoes = $('#importa-negociacoes');

        this._apagar = $('.botao-apagar');

        this._ordemAtual = '';

        this._listaNegociacoes = new Bind(
            new Lista(), new NegociacaoView($('#negociacoes-view')), 'adiciona', 'esvazia', 'ordena', 'inverteOrdem');
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

        Promise.all([services.importaNegociacaoService(), 
        services.importaNegociacaoServiceSemanaRetrasada(), 
        services.importaNegociacaoServiceSemanaAnterior()])
        .then(negociacoes => {
            negociacoes.reduce((arrayAchatado, array) => arrayAchatado.concat(array),[])
            .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
            this._mensagem.texto = "negociacoes importadas com sucesso";
        })
        .catch(error => this._mensagem.texto = error);
        /*
        services.importaNegociacaoService().then(negociacoes => { 
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
            this._mensagem.texto = 'Negociações da semana obtida com sucesso'    
        })
        .catch(erro => this._mensagem.texto = erro);*/
    }

    ordena(coluna){
        if(this._ordemAtual == coluna){
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
            
        }
        this._ordemAtual = coluna;
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