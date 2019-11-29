import 'dart:html';

enum TIPO_PRODUTO { BEBIDA, DOCE, SALGADO }

class Produto {
  String _nome;
  double _preco;
  TIPO_PRODUTO _tipo;

  Produto(this._nome, this._preco, this._tipo);

  String get nome => _nome;
  double get preco => _preco;
  TIPO_PRODUTO get tipo => _tipo;

  set nome(valor) => _nome = valor;
  set preco(valor) => _preco = valor;

  @override
  String toString() {
    return nome;
  }
}
/*
List<Produto> prods_selecionados(List<Produto> produtos) {
  var input = querySelectorAll(
          'input[name=bebidas]:checked, input[name=doces-salgados]:checked')
      .map((input) => (input as InputElement).value);
  return produtos.where((p) => input.contains(p.nome));
} */

void main(List<String> args) {
  List<Produto> produtos = List<Produto>();
  bool checked = true;

  produtos.addAll([
    Produto("Suco", 4, TIPO_PRODUTO.BEBIDA),
    Produto("Refrigerante", 2.5, TIPO_PRODUTO.BEBIDA),
    Produto("Água", 1.5, TIPO_PRODUTO.BEBIDA),
    Produto("Bolo", 3.5, TIPO_PRODUTO.DOCE),
    Produto("Pastel", 3, TIPO_PRODUTO.SALGADO),
    Produto("Torta", 4, TIPO_PRODUTO.DOCE)
  ]);

  produtos.forEach((p) {
    if (p.tipo == TIPO_PRODUTO.BEBIDA) {
      querySelector("#bebidas").append(LabelElement()
        ..append(RadioButtonInputElement()
          ..name = "bebidas"
          ..value = p.nome
          ..checked = checked)
        ..appendText(p.nome));
      checked = false;
    } else {
      querySelector("#doces-salgados").append(LabelElement()
        ..append(CheckboxInputElement()
          ..name = "doces-salgados"
          ..value = p.nome)
        ..appendText(p.nome));
    }
  });

  querySelector("#calc-button").onClick.listen((event) {
    event.preventDefault();
    String nome = (querySelector("#nome") as InputElement).value;
    if (nome.isEmpty) {
      window.alert("Nome esta vazio!");
      return;
    }
    var selected = querySelectorAll(
            'input[name=bebidas]:checked, input[name=doces-salgados]:checked')
        .map((input) => (input as InputElement).value);
    var prods_selected = produtos.where((p) => selected.contains(p.nome));

    double price = prods_selected.map((p) => p.preco).fold(0, (a, b) => a + b);
    String bebida =
        prods_selected.firstWhere((p) => p.tipo == TIPO_PRODUTO.BEBIDA).nome;
    String doces_salgs = prods_selected
        .where((p) => p.tipo != TIPO_PRODUTO.BEBIDA)
        .map((p) => p.nome)
        .fold("", (a, b) => "$a, $b");

    window.alert(
        "Nome: $nome\nBebida: $bebida\n Doces e Salgados: $doces_salgs\nPrice: $price");

    /* var selected_names =
        querySelectorAll("input[name='bebidas'], input[name='doces-salgados']")
            .where((el) {
      if (el is RadioButtonInputElement) {
        return el.checked;
      }
    });
    //.map((el) => (el as InputElement).name);
    print(selected_names);
    var prods = produtos.where((p) => selected_names.contains(p.nome));

    String nome = (querySelector("#nome") as InputElement).value;
    double price = prods.map((p) => p.preco).fold(0, (a, b) => a + b);
    Produto bebida = prods.firstWhere((p) => p.tipo == TIPO_PRODUTO.BEBIDA);
    var doces_salgs =
        produtos.where((p) => p.tipo != TIPO_PRODUTO.BEBIDA).toList();

    window.alert(
        "Cliente: $nome\nBebida: $bebida\nDoces e Salgados: ${doces_salgs}\nValor Total: $price"); */
  });
}
