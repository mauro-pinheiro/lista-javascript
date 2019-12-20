function atualizaContagem() {
    /* let idades = document.querySelector('#output')
          .rows
          .map(function (r) { r.cells[0].textContent })
  
      let maior = idades.filter(function (i) { i >= 18 }).length;
      let menor = idades.filter(function (i) { i < 18 }).length; */

    let maior = 0;
    let menor = 0;

    let idades = document.querySelector("#output").rows;
    for (i = 0; i < idades.length; i++) {
        if (idades[i].cells[0].textContent >= 18) maior++;
        else menor++;
    }

    document.querySelector("#maior-18").textContent = maior;
    document.querySelector("#menor-18").textContent = menor;
}

document.querySelector("#maior-18").textContent = 0;
document.querySelector("#menor-18").textContent = 0;

document.querySelector("#addButton").addEventListener("click", function (event) {
    event.preventDefault();
    let idade = document.querySelector("#input").value;

    let table = document.querySelector("#output");
    let row = document.createElement("tr");
    let idadeData = document.createElement("td");
    let btnRemoveData = document.createElement("td");
    let btnRemove = document.createElement("button");

    idadeData.textContent = idade;
    btnRemove.innerHTML = '<i class="fas fa-ban"></i>';
    btnRemove.addEventListener("click", function (event) {
        alert("Ainda nao sei fazer em js.");
    });

    btnRemoveData.append(btnRemove);
    row.append(idadeData);
    row.append(btnRemoveData);
    table.append(row);

    atualizaContagem();
});
