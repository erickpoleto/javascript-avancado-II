let negociacaoController = new NegociacaoController();

adicionarEventoAdiciona(negociacaoController);
removerEventoAdiciona(negociacaoController);

function adicionarEventoAdiciona(negociacao){

    negociacao._form.addEventListener('submit', function(event){
        negociacaoController.adiciona(event);
    });

}

function removerEventoAdiciona(negociacao){

    negociacao._apagar.addEventListener('click', function(){
        negociacaoController.apaga();
    });

}