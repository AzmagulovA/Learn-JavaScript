//Константа сегодняшней погоды в кельвинах
const kelvin = 0;
//сегодняшняя погода в цельсиях
let celsius= kelvin-273;
//формула для вычисления температуры в фаренгейтах
//floor для округления в меньшую сторону
let fahrenheit=Math.floor(celsius*(9/5)+32)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)