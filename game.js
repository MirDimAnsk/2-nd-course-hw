function game1() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    while (true) {
        let userNumber = prompt("Угадай число от 1 до 100");
        userNumber = Number(userNumber);
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