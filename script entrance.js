document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Эмуляция успешной авторизации и перенаправления на страницу сообщений
    alert("Вы успешно вошли!");
    window.location.href = "/messages";
});