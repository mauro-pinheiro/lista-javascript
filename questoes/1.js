document.querySelector("#addButton").addEventListener("click", function(event) {
  event.preventDefault();
  let number = document.querySelector("#input").value;
  let table = document.querySelector("#output");
  let row = document.createElement("tr");
  let numberData = document.createElement("td");
  let squareData = document.createElement("td");
  let buttonData = document.createElement("td");
  let removeButton = document.createElement("button");

  numberData.textContent = number;
  squareData.textContent = number * number;
  removeButton.innerHTML = '<i class="fas fa-ban"></i>';
  removeButton.addEventListener("click", function() {
    alert("Ainda não sei fazer em js");
  });

  buttonData.append(removeButton);
  row.append(numberData);
  row.append(squareData);
  row.append(buttonData);
  table.append(row);
});
