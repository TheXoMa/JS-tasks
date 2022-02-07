
 let a = 10;
 let b = 3;
 console.log(a % b);
 document.write(a % b);


let c = 10;
let d = 2;
var rest = c % d;
if (rest != 0) {
 console.log("Делится с остатком " + rest);
} else {
 console.log("Делится, результат деления: " + c / d);
}


 console.log("st =" + 2 ** 10);


 document.write(Math.sqrt(245));


let arr = [4, 2, 5, 19, 13, 0, 10];
 let result = 0;
for (i = 0; i < arr.length; i++) {
 f = Math.sqrt((result = result + arr[i] ** 3));
 }
console.log(f);


 let k = Math.sqrt(379);
document.write(Math.round(k) + "<br>");
document.write(k.toFixed(2) + "<br>");
 document.write(k.toFixed(3) + "<br>");


let p = Math.sqrt(587);
 let l = Math.floor(p);
 let u = Math.ceil(p);
 console.log(u + " " + l);


 document.write(Math.max(4, -2, 5, 19, -130, 0, 10) + "<br>");
 document.write(Math.min(4, -2, 5, 19, -130, 0, 10) + "<br>");


function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));


 let arr2 = [];
 for (i = 0; i < 10; i++) {
 arr2[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}
console.log(arr2);


 let t = -3;
 let r = 5;
 document.write(Math.abs(t - r));


 let n = 3;
 let m = 5;
 let y = n - m;
console.log(Math.abs(y));

// let n = 6;
// let m = 1;
// let y = n - m;
// alert(Math.abs(y));


let arr3 = [12, 15, 20, 25, 59, 79];
 let result2 = 0;
 for (i = 0; i < arr3.length; i++) {
 result2 = result2 + arr3[i];
 }
document.write(result2 / 6);


 let e = 10;
let q = 1;
if (e == 0) {
 console.log("Факториал числа 0! = 1");
} else {
 for (i = 1; i <= e; i++) {
  q *= i;
 }
 }
console.log("Факториал числа " + e + "! = " + q);
