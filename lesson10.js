
 let num = 3
function sqr(num) {
 return num * num
 }
 console.log(sqr(num))


let num2 = 3
function sum(num2) {
 return num2 + num2
}
console.log(sum(num2))


let a = 2
let b = 10
let c = 4
function sumMult() {
 return (a + b) / c
}
console.log(sumMult())


function day(num) {
let day = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
 return day[num - 1];
}
let days = day(3)
console.log(days)

function week(day) {
let obj = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вс" }
return obj[day]
}
let days2 = week(3)
console.log(days2)
