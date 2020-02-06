class ProxyFactory{

    static createProxy(objeto, props, action){

        return new Proxy(objeto,{
            get(target, prop, receiver){

                if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    
                    return function(){
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return action(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver){
                
                if(props.includes(prop)){
                    action(target);
                }
                return Reflect.set(target, prop, value, receiver);
                
            }
        });

    }

    static _ehFuncao(func){
        return typeof(func) == typeof(Function)
    }

}