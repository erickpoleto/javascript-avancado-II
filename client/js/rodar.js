let negociacaoController = new NegociacaoController();

_adicionarEventoAdiciona(negociacaoController);
_removerEventoAdiciona(negociacaoController);
_importaNegociacoes(negociacaoController);


function _adicionarEventoAdiciona(negociacao){

    negociacao._form.addEventListener('submit', function(event){
        negociacao.adiciona(event);
    });

}

function _removerEventoAdiciona(negociacao){

    negociacao._apagar.addEventListener('click', function(){
        negociacao.apaga();
    });

}

function _importaNegociacoes(negociacao){
    negociacao._importaNegociacoes.addEventListener('click', function(){
        negociacao.importaNegociacoes();
    });
}

/*function _ordenar(negociacao){

    negociacao._th.addEventListener('click', function(event){
        console.log(this);
    })

}*/