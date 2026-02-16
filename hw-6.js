// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3].
// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 
// 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.

const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}

// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3].
// Найдите индекс значения 4 в этом массиве.

const arr2 = [1, 5, 4, 10, 0, 3];
const index = arr2.indexOf(4);
console.log(index);

// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

const arr3 = [1, 3, 5, 10, 20];
const result = arr3.join(' ');
console.log(result);

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

let arr4 = [];
for (let i = 0; i < 3; i++) {
    arr4[i] = [];
    for (let j = 0; j < 3; j++) {
        arr4[i][j] = 1;
    }
}
console.log(arr4);

// Задание 5
// Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.

let arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);

// Задание 7
// Дан массив: [9, 8, 7, 6, 5].
// Попросите пользователя угадать число с помощью метода prompt. 
// Если значение, которое ввел пользователь, есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».

const arr7 = [9, 8, 7, 6, 5];
let userInput = prompt("Угадайте число от 5 до 9");
if (userInput !== null) {
    let userNumber = Number(userInput);
    if (!isNaN(userNumber) && arr7.includes(userNumber)) {
        alert("Угадал");
    } else {
        alert("Не угадал");
    }
} else {
    alert("Игра отменена");
}

// Задание 8
// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.

const arr8 = 'abcdef';
const arr9 = arr8.split('').reverse().join('');
console.log(arr9);

// Задание 9
// Дан массив: [[1, 2, 3],[4, 5, 6]]. 
// Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const arr10 = [[1, 2, 3], [4, 5, 6]];
const arr11 = [...arr10[0], ...arr10[1]];
console.log(arr11);

// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10).
// Переберите его с помощью цикла for.
// В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.

const arr12 = [];
for (let i = 0; i < 10; i++) {
    arr12.push(Math.floor(Math.random() * 10) + 1);
}
console.log(arr12);
for (let i = 0; i < arr12.length - 1; i++) {
    const sum = arr12[i] + arr12[i + 1];
    console.log(`${arr12[i]} + ${arr12[i + 1]} = ${sum}`);
}

// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

function getSquares(numbers) {
    return numbers.map(num => num * num);
}

const arr13 = [1, 2, 3, 4, 5];
const squares = getSquares(arr13);
console.log(squares);

// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

function getLength(strings) {
    return strings.map(str => str.length);
}

const words = ['Привет', 'Пока', 'Вчера', 'Сегодня'];
const lengths = getLength(words);
console.log(lengths);