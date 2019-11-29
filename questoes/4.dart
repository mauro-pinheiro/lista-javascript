import 'dart:html';

void showError(String message) {
  (querySelector("#error") as InputElement).value = message;
}

class Produto {
  String _nome;
  double _preco;

  Produto(this._nome, this._preco);

  String get nome => _nome;
  double get preco => _preco;

  set nome(value) => _nome = value;
  set preco(value) => _preco = value;
}

void main() {
  List<Produto> produtos = [
    Produto('Cachorro Quente', 1.20),
    Produto('Bauru Simple', 1.30),
    Produto('Bauru Com Ovo', 1.50),
    Produto('Hamburguer', 1.20),
    Produto('Cheeseburguer', 1.30),
    Produto('Refrigerante', 1.00)
  ];

  int cod = 100;
  var output = querySelector('#output') as TableElement;
  produtos.forEach((p) => output.addRow()
    ..addCell().text = p.nome
    ..addCell().text = '${cod++}'
    ..addCell().text = "${p.preco}");

  querySelector("#calcButton")
    ..onClick.listen((event) {
      event.preventDefault();

      int codigo =
          int.tryParse((querySelector("#codigo") as InputElement).value);

      if (codigo < 100 || codigo > 99 + produtos.length) {
        showError("Codigo Inválido!");
        return;
      }
      int qtde = int.tryParse((querySelector("#qtde") as InputElement).value);

      if (qtde < 0) {
        showError("Quantidade Inválida!");
        return;
      }

      double preco = double.tryParse((querySelector("#output") as TableElement)
          .rows
          .elementAt(codigo - 99)
          .cells
          .elementAt(2)
          .text);

      (querySelector("#valor-total") as InputElement).value = '${qtde * preco}';
    });
}
