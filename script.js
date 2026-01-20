document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const fullNameInput = document.getElementById('fullName');
    const phoneInput = document.getElementById('phoneNumber');
    const emailInput = document.getElementById('email');
    const hasPresentationCheckbox = document.getElementById('hasPresentation');
    const presentationTopicContainer = document.getElementById('presentationTopicContainer');

    // Проверяем, состоит ли строка только из русских букв
    function isCyrillicLettersOnly(str) {
        return /^[а-яё\s]+$/i.test(str);
    }

    // Переключение видимости поля темы доклада
    hasPresentationCheckbox.addEventListener('change', () => {
        if (hasPresentationCheckbox.checked) {
            presentationTopicContainer.hidden = false;
        } else {
            presentationTopicContainer.hidden = true;
        }
    });

    // Валидация формы
    form.addEventListener('submit', event => {
        let errors = [];

        // Поле полного имени
        if (!isCyrillicLettersOnly(fullNameInput.value)) {
            errors.push("ФИО должно содержать только русские буквы.");
        }

        // Телефон
        if (!phoneInput.validity.valid || !phoneInput.value.startsWith('+7')) {
            errors.push("Неверный формат номера телефона (+7XXXXXXXXXX)");
        }

        // Email
        if (!emailInput.validity.valid) {
            errors.push("Некорректный адрес электронной почты");
        }

        // Доклад
        if (hasPresentationCheckbox.checked && !presentationTopicContainer.querySelector('#presentationTopic').value.trim()) {
            errors.push("Необходимо ввести тему доклада");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
            event.preventDefault();
        }
    });
})
