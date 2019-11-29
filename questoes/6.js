const TIPO_PRODUTO = {
    BEBIDA: "Bebida",
    DOCE: "Doce",
    SALGADO: "Salgado"
};

class Produto {
    constructor(nome, preco, tipo) {
        this._nome = nome;
        this._preco = preco;
        this._tipo = tipo;

        Object.freeze();
    }

    get nome() {
        return this._nome;
    }

    get preco() {
        return this._preco;
    }

    get tipo() {
        return this._tipo;
    }
}

let produtos = [
    new Produto("Suco", 4, TIPO_PRODUTO.BEBIDA),
    new Produto("Refrigerante", 2.5, TIPO_PRODUTO.BEBIDA),
    new Produto("Água", 1.5, TIPO_PRODUTO.BEBIDA),
    new Produto("Bolo", 3.5, TIPO_PRODUTO.DOCE),
    new Produto("Pastel", 3, TIPO_PRODUTO.SALGADO),
    new Produto("Torta", 4, TIPO_PRODUTO.DOCE)
]

let checked = true;

produtos.forEach(p => {
    if (p.tipo == TIPO_PRODUTO.BEBIDA) {
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'bebidas';
        radio.value = p.nome;
        radio.checked = checked;

        let label = document.createElement('label');
        label.append(radio);
        label.append(p.nome);
        document.querySelector("#bebidas").append(label);
        checked = false;
    } else {
        let check = document.createElement('input');
        check.type = 'checkbox';
        check.name = 'doces-salgados'
        check.value = p.nome;

        let label = document.createElement('label');
        label.append(check);
        label.append(p.nome);
        document.querySelector("#doces-salgados").append(label);
    }
});

document.querySelector("#calc-button").addEventListener('click', event => {
    event.preventDefault();
    let nome = document.querySelector("#nome").value;
    if (!nome) {
        alert("Nome esta vazio!");
    }

    let selected = document
        .querySelectorAll('input[name=bebidas]:checked, input[name=doces-salgados]:checked');
    selected = Array.from(selected).map(s => s.value);
    selected = produtos.filter(p => selected.includes(p.nome));

    let preco = selected.map(p => p.preco).reduce((a, b) => a + b);
    let bebida = selected.filter(p => p.tipo == TIPO_PRODUTO.BEBIDA)[0].nome;
    let doces_salgs = selected
        .filter(p => p.tipo != TIPO_PRODUTO.BEBIDA)
        .map(p => p.nome)
        .reduce((a, b) => a + " " + b, "");

    alert("Nome: " + nome
        + "\nBebida: " + bebida
        + "\nDoces e Salgados: " + doces_salgs
        + "\nPreco: " + preco);
});