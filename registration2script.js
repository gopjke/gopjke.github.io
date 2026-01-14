document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
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

    // Проверка, что пользователь с таким логином не существует
    // Здесь должна быть логика проверки на сервере
    // Пример:
    const existingUsers = ['user1', 'user2']; // Список существующих пользователей
    if (existingUsers.includes(login)) {
        alert('Пользователь с таким логином уже существует.');
        // Открытие формы входа
        window.location.href = 'login.html';
        return;
    }

    // Регистрация пользователя
    alert('Регистрация успешна!');
});