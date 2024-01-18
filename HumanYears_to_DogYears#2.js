//Мой возраст
let myAge = 20;
//Константа для конвертация 2 лет собаки в человечьи года
const earlyYears = 2*10.5;
//вычисление годов собаки с учетом того что 2 года равны 10.5 лет человеческим годам 
let laterYears=myAge-2;
//конвертация человеческих лет в возраст собаки
laterYears *=4;
console.log(earlyYears);
console.log(laterYears);
//мой возвраст в собачьих годах
let myAgeInDogYears = laterYears+earlyYears;
let Name = 'Artyom';
//моё имя со всеми строчными буквами
const myName= Name.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);