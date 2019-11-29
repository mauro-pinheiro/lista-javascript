import 'dart:html';
import 'dart:core';

String mes(String num) {
  List<String> month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  return month[int.parse(num) - 1];
}

void main() {
  querySelector("#submit").onClick.listen((e) {
    e.preventDefault();

    String date = (querySelector("#date") as InputElement).value;
    var date_split = date.split('/');
    String str_date =
        "${date_split[0]} de ${mes(date_split[1])} de ${date_split[2]}";
    querySelector("#output").text = str_date;
  });
}
