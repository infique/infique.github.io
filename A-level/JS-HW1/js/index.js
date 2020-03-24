// Task 1
 console.log("My first debug")

// Task 2
let age = 22
let petName = "Sebek"
console.log(age,petName)

// Task 3
age = 25
console.log(age,petName)

// Task 4
const myPetsName = "Sebek"
let petsAge = 5
const isDog = true
const petsFriend = null

console.log(typeof isDog,
    typeof petsAge,
    typeof myPetsName,
    typeof petsFriend)

// Task 5
const student = {
    name: "Vitalii",
    surname: "Pysanyi",
    isActive: true
}
console.log(typeof student.isActive)

// Task 6
const numbers = [1, 2, 3, 4, 5]
const fruits = ['apple', 'mango', 'orange', 'banana', 'avocado']
const students = [{
        name:"Dima",
        age:18}, 
    {   
        name:"Alex",
        age:18},
    {
        name:"Tanya",
        age:18},
    {
        name:"Kris",
        age:18},
    {
        name:"Olya",
        age:18}
]

console.log(typeof numbers[0])
console.log(typeof fruits[2])
console.log(typeof students[4])

// Task with *********
// *
const lastTask = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(lastTask[0], lastTask[9])

// **
console.log('студент:', student.name, student.surname, ', сейчас активен:', student.isActive)



const student2 = `студент: ${"Vitalii"} ${"Pysanyi"}, сейчас активен: ${true}`;
console.log(student2)

