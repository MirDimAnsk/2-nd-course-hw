// Задание 1

for(i=1; i<=2; i++) {
    console.log('Привет');
}

// Задание 2

for(i=1; i<=5; i++) {
    console.log(i);
}

// Задание 3

for(i=7; i<=22; i++) {
    console.log(i);
}

// Задание 4

const obj={
    "Коля":'200',
    "Вася":'300',
    "Петя":'400'
}
for(let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
}

// Задание 5

let num=0;
for(let n=1000; n>50; n/=2) {
    console.log(n);
    num++;
}
console.log(`Количество итераций: ${num}.`);

// Задание 6

for(let friday=2; friday<=31; friday+=7) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
}

// Дополнительное задание 1

let k=100;
let iterations=0;
for(k; k>0; k-=7) {    
    iterations++;
}
console.log(`Финальное число: ${k}. Количество итераций: ${iterations}.`);

// Дополнотельное задание 2

const months=[
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
let m=0;
while (months[m]) {
    console.log(`${m+1}. ${months[m]}`);
    m++;
}

// Дополнительное задание 3

const book={
    "Название":'Сказки Пушкина',
    "Автор":'Пушкин А.С.',
    "Год издания":'2015',
    "Жанр":'Сказки'
}
for(let key in book) {
    console.log(`${key}: ${book[key]}`);
}