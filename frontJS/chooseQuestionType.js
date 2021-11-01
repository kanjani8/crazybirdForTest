function chooseForm(radioName) {
    var radios = document.getElementsByName(radioName);
    var length = radios.length;
    for (var i = 0 ; i < length; i++) {
        document.getElementById('form_' + radios[i].value).style.display = 'none';
        if (radios[i].checked)
            document.getElementById('form_' + radios[i].value).style.display = 'block';
    }
}