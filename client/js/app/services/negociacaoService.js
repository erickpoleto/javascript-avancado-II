class NegociacaoService{
        
    constructor(){
    this._xhr = new XMLHttpRequest();
    }
    
    importaNegociacaoService(cb){
    
    this._xhr.open('GET', 'negociacoes/semana');

        /*configurações*/
        this._xhr.onreadystatechange = () =>{
            if(this._xhr.readyState == 4){

                if(this._xhr.status == 200){

                    cb(null, JSON.parse(this._xhr.responseText)
                        .map((objeto) => 
                            new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                        ));

                }else{
                    console.log(this._xhr.responseText);
                    cb('não foi possível obter as negociações');
                }
            }
        };

        this._xhr.send();
    }
}