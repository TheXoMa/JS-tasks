 
let i = 1;
while (i <= 100) {
   document.write(i + "<br>")
   i++;
}

 
 let k = 11;
 while (k <= 33) {
  document.write(k + "<br>")
   k++;
}

 
let j = 1;
 while (j < 100) {
   if (j % 2 == 0) {
    document.write(j + "<br>")
 }
 j++;
 }


let o = 1;
 let result = 0;
for (o = 1; o < 100; o++) {
 result = result + o
}
document.write(result)


 let arr = [1, 2, 3, 4, 5]
 for (let i = 0; i < arr.length; i++) {
  document.write(arr[i] + "<br>")
}


let arr2 = [1, 2, 3, 4, 5];
 let result2 = 0
for (let i = 0; i < arr2.length; i++) {
  result2 = result2 + arr2[i]
 }
 document.write(result2 + "<br>");

let obj = { green: "зеленый", red: "красный", blue: "голубой" };
 for (key in obj) {
   document.write(key + ", ")
 }
 for (key in obj) {
   document.write(obj[key] + ", ")
 }
 document.write("<br/>")


let obj2 = { Коля: "200", Вася: "300", Петя: "400" }
for (key in obj2) {
document.write(
   " " + key + " - заробітна плата" + " " + obj2[key] + "доларів" + ",")
 }


let arr3= [2, 15, 9, 15, 0, 4]
for (let i = 0; i < arr3.length; i++) {
 if (i > 3 && i < 10) {
  document.write(arr3[i] + "<br>")
  }
 }


 let arr4 = [-7, 15, 11, 5, -11, 13, 2, 7, -7];
let result3 = 0;
 for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] >= 0) {
   result3 = result3 + arr4[i];
 }
 }
 document.write(result3);


 let arr5 = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < arr5.length; i++) {
 if ((arr[i] = 4)) {
   document.write("Yes");
 } else {
   document.write("No");
 }
 }


let arr6 = [10, 20, 30, 50, 235, 3000];
 for (let i = 0; i < arr6.length; i++) {
 let str = arr6[i] + "";
 if (str[0] == "1" || str[0] == "2" || str[0] == "5") {
   document.write(arr[i] + ", ");
 }
 }


 let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str = "";
 for (let i = 0; i < arr7.length; i++) {
 str = str + "-" + arr7[i];
}
document.write(str);


let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
 for (i = 0; i < days.length; i++) {
 if (i == 5 || i == 6) {
  document.write("<strong>" + days[i] +"</strong>" + " ");
 } else {
   document.write(days[i] + " ");
 }
}


let days2 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
 let day = 4;
for (i = 0; i < days2.length; i++) {
 if (i == day) {
 document.write("<em>" + days2[i] + "</em>" + " ");
} else {
  document.write(days[i] + " ");
 }
 }


 let n = 1000;
let num = 0;
while (n > 50) {
  num++;
 n = n / 2;
 }
document.write(n + "  ");
 document.write("<strong>" + num + "</strong>");
