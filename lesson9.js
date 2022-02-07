
 str = "hello world!"
 str = str[0].toUpperCase() + str.substr(1)
 console.log(str)

let str2 = "hello world!";
str2 = str2.split("");
 str2[0] = str2[0].toUpperCase();
let result = str2.join("");
console.log(result);


let str3 = "123456";
 b = str3.split("").reverse().join("");
console.log(b);


let str4 =
 "http://old.code.mu/tasks/javascript/base/praktika-na-kombinacii-standartnyh-funkcij-javascript.html";
 if (str4.substr(0, 7) == "http://") {
 console.log("Да");
} else {
  console.log("Нет");
 }


let str5 = "index.html";
if (str.substr(-5) == ".html") {
console.log("Да");
} else {
 console.log("Нет");
}
