// Task 1
const number = Number(prompt("Введите число"))

if (number > 10){
    alert("Больше")
}else if(number < 10){
    alert("Меньше")
}
else if(number === 10){
    alert("Равно")
}
else{
    alert("Введите число")
}

// Task 2
const age = Number(prompt("Укажите Ваш возраст"))

if (age >= 18){
    console.log("Добро пожаловать!")
}
else{
    console.log("Еще малой, проходи мимо")
}
console.log((age >=18) ? "Добро пожаловать!" : "Еще малой, проходи мимо")

// Task 3
const a = Number(prompt("Введите число"))
const b = Number(prompt("Введите число"))
const c = Number(prompt("Введите число"))

if(a > b, a > c){
    alert(a)
}else if (b > a, b > c){
    alert(b)
}else if (c > a, c > b){
    alert(c)
}
else{
    alert("Nothing found")
}

// Task 4
const login = prompt("Введите Ваш Логин")

if (login === 'test'){
    const password = prompt("Введите Ваш пароль")

    if (login === 'test',password === 'password'){
        alert("Поздравляем! Добро пожаловать!")
    }else{
        alert("Error")
    }
}else{
    alert("Нет такого пользователя")
}

// Task 5
const oldPassword = prompt("Введите пароль")

if (oldPassword === 'password') {
    alert("Добро пожаловать!")
}else{
    const newPassword = prompt("Неверный пароль! Введите новый пароль")
    if (newPassword === 'password'){
        alert("Новый пароль должен отличаться!")
    }else{
        const newPassword1 = prompt("Подтвердите пароль")
        if (newPassword !== newPassword1){
            alert("Пароль не совпадает")
        }else{
            alert("Пароль сохранен")
        }
    }
}

// Task 6
const USD = 28.5
const EUR = 30.5
const money = prompt("Выберете валюту: USD или EUR")

switch (money) {
    case 'USD':
        const UAH1 = Number(prompt("Какую сумму Вы хотите поменять?"))
            alert(`Ваша сумма в USD будет равна $ ${UAH1 / USD}`)
    break;
    case 'EUR':
        const UAH2 = Number(prompt("Какую сумму Вы хотите поменять?"))    
            alert(`Ваша сумма в EUR будет равна € ${UAH2 / EUR}`)
    break;
    default:
        alert("Нет такой валюты")
}

// Task with *****

// 1*****
const x = Number(prompt("Введите первое число"))
const y = Number(prompt("Введите второе число"))
const z = Number(prompt("Умножте два первых числа и введите ответ"))
const d = (x * y)

if (x * y === z) {
    alert("Поздравляем, Вы знаете таблицу умножения")
}else{
    alert(`Правильный ответ ${d}`)
    alert("Иди учись")
}

// 2*****
const stone = 1
const scissors = 2
const paper = 3
const user = Number(prompt("Введите 1, 2 или 3"))
const bot = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    alert(bot)

if (user === bot) {
    alert("Ничья")
    }else if (user == stone) {
        if (bot === scissors){
            alert("Вы выиграли!")
        }else if (bot === paper){
            alert("BOT выиграл!")
        }
    }
    else if (user == paper) {
        if (bot === stone){
            alert("Вы выиграли!")
        }else if (bot === scissors){
            alert("BOT выиграл!")
        }
    }
    else if (user == scissors) {
        if (bot === paper){
            alert("Вы выиграли!")
        }else if (bot === stone){
            alert("BOT выиграл!")
        }
}

// 3*****
    const compare = (user === bot) ? alert("Ничья") : 
    (user === stone) && (bot === scissors) ? alert("Вы выиграли!") : 
    (user === stone) && (bot === paper) ? alert("BOT win") :
    (user === paper) && (bot === stone) ? alert("Вы выиграли") :
    (user === paper) && (bot === scissors) ? alert("BOT win") : 
    (user === scissors) && (bot === paper) ? alert("Вы выиграли") : 
    (user === scissors) && (bot === stone) ? alert("BOT win") : alert("Вы выиграли");
