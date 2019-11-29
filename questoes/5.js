function mes(num) {
    let month = [
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

    return month[num - 1];
}

document
    .querySelector("#submit")
    .addEventListener('click', event => {
        event.preventDefault();
        let date = document.querySelector("#date").value;
        let date_split = date.split('/');
        let str_date = date_split[0]
            + " de " + mes(date_split[1])
            + " de " + date_split[2];
        document.querySelector("#output").textContent = str_date;
    });