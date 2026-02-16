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
    const operator = ['+', '-', '*', '/'];    
    let operation = operator[Math.floor(Math.random() * operator.length)];
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let userInput, userNumber, result;
    switch (operation) {
        case '+':                     
            userInput = prompt (`Реши задачу: ${a} + ${b} введи ответ ниже`);
            userNumber = Number (userInput);           
            result = a + b;                    
        break;
        case '-':            
            userInput = prompt (`Реши задачу: ${a} - ${b} введи ответ ниже`);           
            userNumber = Number (userInput);
            result = a - b;                       
        break;
        case '*':            
            userInput = prompt (`Реши задачу: ${a} * ${b} введи ответ ниже`);
            userNumber = Number (userInput);            
            result = a * b;
        break;
        case '/':            
            userInput = prompt (`Реши задачу ${a} / ${b} введи ответ ниже`);
            userNumber = Number (userInput);            
            result = a / b;            
        break;
    }
    while (true) {
        if (userInput === null) {
            alert("Игра отменена.");
            break;
        }    
        if (isNaN(userNumber)) {
            alert("Игра отменена! Пожалуйста, вводи числа!");
            break;            
        } else if (userNumber === result) {
                alert("Поздравляю, твой ответ верен!");
                break;
                } else {
                    alert(`Ты ошибся, правильный ответ: ${result}!`);
                    break;
                    }
    }
}