let registeredUsers = []; // Массив зарегистрированных пользователей

// Имитация базы данных зарегистрированных пользователей
registeredUsers.push({ login: "test_user", password: "test_password" });

// Регистрация нового пользователя
function handleRegistration() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    // Проверка существования пользователя
    const existingUser = registeredUsers.find(user => user.login === login);

    if (existingUser) {
        alert("Пользователь с данным логином уже существует. Перенаправляем на страницу входа.");
        showLoginForm();
        return false;
    }

    // Регистрация успешного пользователя
    registeredUsers.push({ login, password });
    alert("Регистрация успешна!");
    return false;
}

// Показываем форму входа
function showLoginForm() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Авторизация пользователя
function handleLogin() {
    const loginExisting = document.getElementById("login-existing").value;
    const passwordExisting = document.getElementById("password-existing").value;

    const validUser = registeredUsers.find(
        user => user.login === loginExisting && user.password === passwordExisting
    );

    if (validUser) {
        alert(`Авторизация прошла успешно.`);
    } else {
        alert("Ошибка аутентификации. Проверьте логин и пароль.");
    }

    return false;
}