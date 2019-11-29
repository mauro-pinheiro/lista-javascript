document
    .querySelector('#addButton')
    .addEventListener('click', event => {
        event.preventDefault();
        let nome = document.querySelector('#input').value;
        let table = document.querySelector('#output');

        let row = table.insertRow(0);
        let nomeData = document.createElement('td');
        let btnRemoveData = document.createElement('td');
        let btnRemove = document.createElement('button');

        nomeData.textContent = nome;
        btnRemove.addEventListener('click', () => alert("Ainda não sei fazer em js."));
        btnRemove.innerHTML = '<i class="fas fa-ban"></i>';

        btnRemoveData.append(btnRemove);
        row.append(nomeData);
        row.append(btnRemoveData);
    });