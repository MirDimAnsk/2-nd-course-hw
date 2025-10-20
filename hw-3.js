// Задание 1

let password=String('password');
let userPassword=String(prompt('Введите пароль'));
if(password===userPassword){
    alert('Пароль введен верно');
} else{
    alert('Пароль введен неправильно');
}

// Задание 2

let c=2;
if(c>0 && c<10) {
    console.log('Верно');
} else{
    console.log('Неверно');
}

// Задание 3

let d=101;
let e=99;
if(d>100 || e>100) {
    console.log('Верно');
} else{
    console.log('Неверно');
}

// Задание 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// Задание 5

let monthNumber=12;
switch (monthNumber) {
    case 1:
        console.log('Месяц: Январь. Сезон: Зима.');       
        break;
    case 2:
        console.log('Месяц: Февраль. Сезон: Зима.');       
        break;
    case 3:
        console.log('Месяц: Март. Сезон: Весна.');       
        break;
    case 4:
        console.log('Месяц: Апрель. Сезон: Весна.');       
        break;
    case 5:
        console.log('Месяц: Май. Сезон: Весна.');       
        break;
    case 6:
        console.log('Месяц: Июнь. Сезон: Лето.');       
        break;
    case 7:
        console.log('Месяц: Июль. Сезон: Лето.');       
        break;
    case 8:
        console.log('Месяц: Август. Сезон: Лето.');       
        break;
    case 9:
        console.log('Месяц: Сентябрь. Сезон: Осень.');       
        break;
    case 10:
        console.log('Месяц: Октябрь. Сезон: Осень.');       
        break;
    case 11:
        console.log('Месяц: Ноябрь. Сезон: Осень.');       
        break;
    case 12:
        console.log('Месяц: Декабрь. Сезон: Зима.');       
        break;
    default:
        console.log('Ошибка! Номер месяца должен быть от 1 до 12!');
        break;
}

// Дополнительное задание 1

let userNumber=Number(prompt('Введите число'));
if (isNaN(userNumber)) {
    alert('Вы ввели не число!');
} else if (userNumber%2===0) {
    alert('Вы ввели четное число');
} else {
    alert('Вы ввели нечетное число');
}

