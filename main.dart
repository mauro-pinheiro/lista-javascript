import 'dart:html';

void main() {
  var output = querySelector('#output');
  var listElement = Element.ul();
  output.append(listElement);

  for (int i = 1; i <= 6; i++) {
    listElement.append(Element.li()
      ..append(Element.a()
        ..text = 'Questão 0$i'
        ..attributes['href'] = 'questoes/$i.html')
      ..classes.add('questao'));
  }
}
