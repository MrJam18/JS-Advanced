'use strict'
let name = /^[a-zа-я]+$/;
let phone = /^\+\d\(\d{3}\)\d{3}-\d{4}$/;
let mail = /^[a-z\.-\d]+@[a-z\.-\d]+\.[a-z]{2,6}$/;
let text = /.+/
function validation() {
    let iName = document.querySelector('#nameInput');
    let iPhone = document.querySelector('#phoneInput');
    let iMail = document.querySelector('#mailInput');
    let iText = document.querySelector('#textInput');
    document.querySelectorAll('.errorField').forEach(function (el) {
        el.remove();
    });
    document.querySelectorAll('.input-red').forEach(el => {
        el.classList.remove('input-red');
    });
    if (!name.test(iName.value)) {
        validationError(iName);
    }
    if (!phone.test(iPhone.value)) {
        validationError(iPhone);
    }
    if (!mail.test(iMail.value)) {
        validationError(iMail);
    }
    if (!text.test(iText.value)) {
        validationError(iText);
    }
}
function validationError(el) {
    el.insertAdjacentHTML('afterend', '<div class= "errorField"> Вы ввели неверное значение в данное поле!</div>');
    el.classList.add('input-red');
}