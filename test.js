// Проверяем выбранные ответы
function checkAnswers() {
    const answers = [
        ["A"], // Вопрос 1
        ["B"], // Вопрос 2
        ["V"], // Вопрос 3
        ["B"], // Вопрос 4
        ["G"], // Вопрос 5
        ["B"]  // Вопрос 6
    ];

    let correctCount = 0;
    for(let i=1; i<=answers.length; i++) {
        const selectedAnswer = document.querySelector(`input[name=q${i}]:checked`);
        if(selectedAnswer && selectedAnswer.value === answers[i-1][0]) {
            correctCount++;
        }
    }

    alert("Вы ответили правильно на " + correctCount + " из 6 вопросов.");
}