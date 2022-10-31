function sendMail() {
    const telefon = 'Telefon: ' + document.getElementById('yourPhone').value + '\n';
    const nume = 'Nume: ' + document.getElementById('yourName').value + '\n';
    const mesaj = 'Mesag: ' + document.getElementById('yourMessage').value;
    const result = telefon.concat(nume, mesaj);

    var link = "mailto:gabrielcchelariu@gmail.com"
        + "?cc="
        + "&subject=" + escape('Client: ' + document.getElementById('yourName').value)
        + "&body=" + escape(result);
    window.location.href = link;
}