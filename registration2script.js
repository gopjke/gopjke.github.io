document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value.trim();
    const saveData = document.getElementById('saveData').checked;

    // Проверка логина
    if (!/^[a-zA-Z0-9_-]+$/.test(login)) {
        alert('Логин может содержать только латинские буквы, цифры, символы подчеркивания и тире.');
        return;
    }

    // Проверка пароля
    if (password.length < 6) {
        alert('Пароль должен быть не менее 6 символов.');
        return;
    }

    // Проверка флага "сохранить данные"
    if (!saveData) {
        alert('Необходимо отметить пункт "Сохранить данные".');
        return;
    }

    try {
        // Запрашиваем сервер на предмет наличия пользователя
        const response = await fetch('/check_login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ login })
        });

        const result = await response.json();

        if (result.exists) {
            alert('Пользователь с таким логином уже существует.');
            window.location.href = 'login.html'; // переход на форму входа
            return;
        }

        // Если логин свободен, регистрируем пользователя
        alert('Регистрация успешна!');
        
        // Здесь можешь направить пользователя куда-то дальше или выполнить дополнительные действия
    } catch (err) {
        console.error(err);
        alert('Возникла ошибка при обработке запроса.');
    }
});