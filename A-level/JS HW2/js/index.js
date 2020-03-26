// Task 1
console.log(1 == 2)
console.log(1 != 2)

console.log(1 == 1)
console.log(1 != 1)

console.log("text" == 5)
console.log("text" != 5)

console.log("text" == "Text")
console.log("text" == "text")

console.log(true == "true")
console.log(true == false)

console.log(false == 0)
console.log(false === 0)

console.log("" == false)
console.log("" !== false)

console.log(undefined === null)
console.log(undefined == null)

console.log(17 === true)
console.log("17" === true)
console.log({} === {})

// // Task 2
let evenNumbers = prompt('Это четное число?', 20)
if(evenNumbers % 2 == 0){
    console.log(true)
}
else{
    console.log(false)
}

// //  Task 3
let oddNumbers = prompt('Это нечетное число?', 21)
if(oddNumbers % 2 != 0){
    console.log(true)
}
else{
    console.log(false)
}

// Task 4
let numberX = 10
numberX += 10
numberX **= 10
numberX %= 10
console.log(numberX)

// Task 5
let numberY = "100"

console.log(typeof +numberY)
console.log(typeof Number(numberY))
console.log(typeof parseInt("100"))

// Task 6
const a = 10
const b = 5

console.log( (a + b) * (a - b) == (a ** 2) - (b ** 2) )
console.log( (2 + 3) * (2 - 3) == (2 ** 2) - (3 ** 2) )


// Task with ******

// 1*****
let userNumber1 = Number(prompt("Введите 3 числа", 5))
let userNumber2 = Number(prompt("Введите 3 числа", 10))
let userNumber3 = Number(prompt("Введите 3 числа", 15))

alert(userNumber1 + 10 + userNumber2 + 10 + userNumber3 + 10)

// 2*****
let x = Number(prompt("Существует ли треугольник?",2))
let y = Number(prompt("Существует ли треугольник?",12))
let z = Number(prompt("Существует ли треугольник?",3))

if(x + y > z, y + z > x, x + z > y){
    console.log(true)
    alert("Треугольник существует")
}
else{
    console.log(false)
    alert("Треугольник НЕ существует")
}

// 3*****
let a1 = 2
let b1 = 3

console.log((a1 + b1) ** 3 == a1 ** 3 + 3 * a1 ** 2 * b1 + 3 * a1 * b1 ** 2 + b1 ** 3)
console.log((5 + 10) ** 3 == 5 ** 3 + 3 * 5 ** 2 * 10 + 3 * 5 * 10 ** 2 + 10 ** 3)