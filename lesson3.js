let arr= ["a", "b","c"]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

let arr2 = ["a", "b","c","d"]
console.log(arr2[0]+arr2[1],arr2[2]+arr2[3])

let arr3 = [2,5,3,9]
console.log(arr3[0]*arr3[1]+arr3[2]*arr3[3])

let  obj = {a: 1, b: 2, c: 3}
console.log(obj["c"],obj[2])

let obj2 = {Коля: '1000', Вася: '500', Петя: '200'};
console.log(obj2["Коля"],obj2["Петя"])

let days ={1:"Понедельник",2:"Вторник",3:"Среда",4:"Черверг",5:"Пятница",6:"Суббота",7:"Воскресенье"}
console.log(days["4"])


let day = 5
let days2 =["Понедельник","Вторник","Среда","Черверг","Пятница","Суббота","Воскресенье"]
console.log(days2[day])

let arr4 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
console.log(arr4[1][0])

let obj3 = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
console.log(obj3["js"][0])

let arr5 = {
	'ru':["Понедельник","Вторник","Среда","Черверг","Пятница","Суббота","Воскресенье"],
	'en':["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
};

console.log(arr5["ru"][0],arr5["en"][2])


let arr6 = {
	lang:["Понедельник","Вторник","Среда","Черверг","Пятница","Суббота","Воскресенье"],
	lang:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
};

let lang ="ru"
console.log(arr5[lang][day])