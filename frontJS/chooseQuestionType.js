function chooseForm(radioName) {
    const radios = document.getElementsByName(radioName);
    const length = radios.length;
    for (let i = 0 ; i < length; i++) {
        document.getElementById('form_' + radios[i].value).style.display = 'none';
        if (radios[i].checked)
            document.getElementById('form_' + radios[i].value).style.display = 'block';
    }
}