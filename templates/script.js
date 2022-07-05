
function ValidPas() {
    let login = document.getElementById('input_email').value;
    let password = document.getElementById('input_password').value;

    if (login == '') alert('Заполните строку с e-mail');
    else if (password == '') alert('Заполните строку с паролем');
    else if (login == 'ivan' && password == 'ivan') {
        alert('Вы успешно авторизовались!');
        window.location.href = 'main.html';
        }
    else alert('Неверное имя пользователя или пароль.');
}



function Registration() {
    let name = document.getElementById('input_name_reg').value;
    let login = document.getElementById('input_email_reg').value;
    let password = document.getElementById('input_password_reg').value;
    let password2 = document.getElementById('input_password_reg_2').value;

    if (name == '') alert('Заполните строку с именем');
    else if (login == '') alert('Заполните строку с e-mail');
    else if (password == '') alert('Заполните строку с паролем');
    else if (password2 == '') alert('Введите пароль снова');
    else if (password != password2 && password != '') alert('Пароли не совпадают!');
    else {alert('Регистрация прошла успешно!');
          window.location.href = 'main.html';}
}


setInterval(function(){
    var r1 = document.getElementById('r1');
    var r2 = document.getElementById('r2');
    var r3 = document.getElementById('r3');
    var r4 = document.getElementById('r4');

    if (r1.checked) {document.getElementById("r1").checked = false;
        document.getElementById("r2").checked = true;}

    else if (r2.checked) {document.getElementById("r2").checked = false;
        document.getElementById("r3").checked = true;}
    
    else if (r3.checked) {document.getElementById("r3").checked = false;
        document.getElementById("r4").checked = true;}

    else if (r4.checked) {document.getElementById("r4").checked = false;
        document.getElementById("r1").checked = true;}

}, 5000);


function SendForm() {
    let name = document.getElementById('name_input_form').value;
    let email = document.getElementById('email_input_form').value;
    let text = document.getElementById('text_input_form').value;

    if (name == '') alert('Заполните строку с вашим именем');
    else if (email == '') alert('Заполните строку с вашим телефоном или е-mail');
    else if (text == '') alert('Заполните строку с собщением');

    else {
            alert('Ваш запрос был успешно отправлен администрации магазина!');
            window.location.href = 'main.html';
          }
}










