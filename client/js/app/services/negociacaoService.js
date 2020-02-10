class NegociacaoService{
        
    constructor(){

        this._http = new HttpService();
    }
    
    importaNegociacaoService(){
            /*configurações*/
            return this._http.get('negociacoes/semana')
                      .then(negociacoes =>{
                        return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                      })
                      .catch(erro => {
                          console.log(erro);
                          throw new Error('não foi possivel obter as negociacoes da semana');
                      });
    }
    
    importaNegociacaoServiceSemanaRetrasada(){
       
            /*configurações*/
            return this._http.get('negociacoes/retrasada')
                      .then(negociacoes =>{
                        return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                      })
                      .catch(erro => {
                          console.log(erro);
                          throw new Error('não foi possivel obter as negociacoes da semana');
                      });
    }
    

    importaNegociacaoServiceSemanaAnterior(){
       
            /*configurações*/
            return this._http.get('negociacoes/anterior')
                      .then(negociacoes =>{
                        return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                      })
                      .catch(erro => {
                          console.log(erro);
                          throw new Error('não foi possivel obter as negociacoes da semana');
                      });
        }
}