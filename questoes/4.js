function showError(message) {
    document.querySelector("#error").value = message;
}

class Produto {
    constructor(nome, preco) {
        this._nome = nome;
        this._preco = preco;

        Object.freeze(this);
    }

    get nome() {
        return this._nome;
    }

    get preco() {
        return this._preco;
    }
}


let produtos = [
    new Produto('Cachorro Quente', 1.20),
    new Produto('Bauru Simple', 1.30),
    new Produto('Bauru Com Ovo', 1.50),
    new Produto('Hamburguer', 1.20),
    new Produto('Cheeseburguer', 1.30),
    new Produto('Refrigerante', 1.00)
];

let cod = 100;

let table = document.querySelector("#output");
produtos.forEach(p => {
    let row = table.insertRow();
    row.insertCell().textContent = p.nome;
    row.insertCell().textContent = cod++;
    row.insertCell().textContent = p.preco;
});
document
    .querySelector("#calcButton")
    .addEventListener('click', event => {
        event.preventDefault();

        let codigo = document.querySelector("#codigo").value;

        if (codigo < 100 || codigo > 99 + produtos.length) {
            showError("Codigo Invalido!");
            return;
        }
        let qtde = document.querySelector('#qtde').value;

        if (qtde < 0) {
            showError("Quantidade Inválida!");
        } else {

            let preco = document
                .querySelector("#output")
                .rows.item(codigo - 100)
                .cells.item(2)
                .textContent;

            document.querySelector("#valor-total").value = qtde * preco;
        }
    });

