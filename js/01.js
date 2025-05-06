let name = 'Natasha';
let age = 30;
let city = 'Moscow'
let isWork = true
let job = null
let test
const skills = [1,2,3,4,5]
const person = {
    name: 'Natasha',
    age: 30,
    city: 'Moscow',
    skills: [1,2,3,4,5]
}
console.log(person['city'])
console.log(person.skills2?.includes(1))

console.log(`${name} ${age} ${city}!`)

// задача 1
let a = 10
let b = 5
let s = a+b
let r = a-b
console.log(s)
console.log(r)

// задача 2

let age1 = 17
let age2 = 17

if (age1 >= 18 && age2 >= 18) {
    console.log(`Оба совершеннолетние`)
}
else if (age1 >= 18 || age2 >= 18) {
    console.log(`Один совершеннолетний`)
}
else console.log(`Оба несовершеннолетние`)

// задача 3
let name1 = 'Вася'
let age3 = 30
let marrid = false
let pet = null
let satary

console.log(name1, typeof name1)
console.log(age3, typeof age3)
console.log(marrid, typeof marrid)
console.log(pet, typeof pet)
console.log(satary, typeof satary)

// задача 4
let x = 77
if (x === 5) {
    console.log(`пятерка!`)
}
else if (x === '5') {
    console.log(`пятерка-строка!`)
}
else console.log('Это не пять')

// задача 5
let hasMoney = false
let hasTicket = true

if (hasMoney && hasTicket === true) {
    console.log(`Можно ехать`)
}
else if (hasMoney || hasTicket === true) {
    console.log(`Купи билет или заработай денег`)
}
else  console.log(`Остаешься дома`)

// задача 6
let temp = 0
console.log(temp >= 25 ? `Жарко` : `Прохладно`)

// задача 7
let grade = 85
if (grade >=90) {
    console.log(`Отлично`)
}
else if ( grade >=75) {
    console.log(`Хорошо`)
}
else if (grade >=60) {
    console.log(`Удовлетворительно`)
}
else console.log(`Неудовлетворительно`)