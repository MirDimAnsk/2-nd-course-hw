function game1() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    while (true) {
        let userInput = prompt("Угадай число от 1 до 100");
        if (userInput === null) {
            alert("Игра отменена.");
            break;
        }
        let userNumber = Number (userInput);
        if (isNaN(userNumber)) {
            alert("Пожалуйста, введи число!");
            continue;
        }        
        if (userNumber === randomNumber) {
            alert("Поздравляю, ты угадал число!");
            break;
        } else if (userNumber > randomNumber) {
            alert("Твое число больше загаданного, попробуй еще!");
        } else {
            alert("Твое число меньше загаданного, попробуй еще!");
        }
    }
}

function game2() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;    
    if (operator === '/') {        
        a = b * (Math.floor(Math.random() * 10) + 1);
    }
    let correctAnswer;
    switch (operator) {
        case '+': correctAnswer = a + b; break;
        case '-': correctAnswer = a - b; break;
        case '*': correctAnswer = a * b; break;
        case '/': correctAnswer = a / b; break;
    }
    let userInput, userNumber;
    while (true) {
        userInput = prompt(`Реши задачу: ${a} ${operator} ${b} = ?`);
        if (userInput === null) {
            alert("Игра отменена.");
            return;
        }
        if (userInput.trim() === '') {
            alert("Ответ не может быть пустым. Попробуй снова.");
            continue;
        }
        userNumber = Number(userInput);
        if (isNaN(userNumber) || !isFinite(userNumber)) {
            alert("Ошибка! Введи корректное число.");
            continue;
        }
        break;
    }
    if (userNumber === correctAnswer) {
        alert("Поздравляю, твой ответ верен!");
    } else {
        alert(`Ты ошибся, правильный ответ: ${correctAnswer}!`);
    }
}