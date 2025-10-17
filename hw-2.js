// Задание 1

let a=10;
alert(a);
a=20;
alert(a);

// Задание 2

let firstIphone=2007;
alert(`Первый Iphone вышел в ${firstIphone} году.`);

// Задание 3

const creatorJS = 'Брэндан Эйх (Brendan Eich)';
alert(`Создатель языка JS ${creatorJS}.`);

// Задание 4

a=10;
let b=2;
alert(`Сумма: ${a+b}, Разность: ${a-b}, Произведение: ${a*b}, Частное: ${a/b}`);

// Задание 5

let result=2**5;
alert(result);

// Задание 6

a=9;
result=a%b;
alert(`Остаток от деления: ${result}.`);

// Задание 7

let num=1;
num+=5;
num-=3;
num*=7;
num/=3;
num++;
num--;
alert(num);

// Задание 8

let age=prompt('Сколько Вам лет?');
alert(age);

// Задание 9

const user={
   name:'user',
   age: 25,
   isAdmin: false
}

// Задание 10

let userName=prompt('Введите ваше имя!');
alert(`Привет, ${userName}!`);

// Дополнительное задание

let number=prompt('Загадайте и напишите сюда любое число');
result=number*2;
alert(`Мы удвоили Ваше число и оно стало таким: ${result}`);
result=result+10;
alert(`Затем мы увеличили полученное число на 10 и оно стало таким: ${result}`);
result=result/2;
alert(`Потом мы разделили полученное число на 2 и оно стало таким: ${result}`);
result=result-number;
alert(`В конце мы из полученного числа вычли загаданное и оно стало таким: ${result}`);
alert(`Ответ: 5`);