// Функция для отправки  на сервер
async function checkAuthOnServer(username, password) {
    const response = await fetch('/api/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    });

    return await response.json();
}

// Кнопка 'Войти' 
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('#loginForm');

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault(); 

        const formData = new FormData(loginForm);
        let credentials = {};
        
        formData.forEach((value, key) => {
            credentials[key] = value;
        });

        try {
           
            const result = await checkAuthOnServer(credentials.username, credentials.password);

            if(result.success) {
                console.log('Пользователь успешно вошёл.');
                
                
                saveLoginState(credentials.username, credentials.password, credentials.rememberMe === 'on');

               
                window.location.href = '/messages';
            } else {
                throw new Error("Неверные логин или пароль");
            }
        } catch(error) {
            alert(`Ошибка авторизации: ${error.message}`);
        }
    });
});