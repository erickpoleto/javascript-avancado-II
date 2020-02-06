class PreencherView{

    constructor(elemento){
        this._elemento = elemento;    
    }

    _tabela(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Salário</th>
                </tr>
            </thead>

            <tbody>
                ${model.lista.map(n => 
                    `
                    <tr>
                        <td>${n.nome}</td>
                        <td>${n.endereco}</td>
                        <td>${n.salario}</td>
                    </tr>
                `).join('')}
            <tbody>
            </table>
        `
    }

    update(model) {
        console.log();
        this._elemento.innerHTML = this._tabela(model);
    }

}