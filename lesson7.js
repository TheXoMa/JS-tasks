
 let str = "js"
 console.log(str.toUpperCase())

 let str2 = "JS"
console.log(str2.toLowerCase())


 let str3 = "я учу javascript!"
console.log(str.length)


 let str4 = "я учу javascript!"
console.log(str4.substring(2, 5) + "  " + str4.substring(6, 16))
console.log(str4.slice(2, 5) + "  " + str4.slice(6, 16))


let str5 = "я учу javascript!"
 console.log(str5.indexOf("учу"))


 let str6 = "я учу javascript!"
 let n = 7
 if (str6.length > n) {
 let result = str6.slice(0, n + 1)
console.log(result + "...")
 } else {
 result = str6
console.log(result)
}


let str7 = "Я-учу-javascript!"
 str7 = str7.replace(/-/g, "!")
console.log(str7)

let str8 = "я учу javascript!"
let arr = str8.split(" ")
console.log(arr)


 let str9 = "я учу javascript!"
 let arr2 = str9.split("")
 console.log(arr2)


let date = "2025-12-31"
let date2 = date.split("-")
console.log(date2[2] + "-" + date2[1] + "-" + date2[0])


let ar2 = ["я", "учу", "javascript", "!"]
 str9 = arr2.join("+")
console.log(str9)


let str10 = "я учу javascript!"
 let str11 = str10.slice(0, 1).toUpperCase() + str10.slice(1)
 document.write(str11)


let str12 = "я учу javascript!"
let str13 = str12.split("  ")
let arr3 = str13
for (let i = 0; i < arr3.length; i++) {
  if (arr3[0] != arr3[i]) {
    ar3r[i] = arr3[i].toUpperCase()
  }
}
let result3 = arr3.join("  ")
console.log(result3)


let str14 = "var_test_text"
 let str15 = str14.split("_")
 let arr4 = str15
for (let i = 0; i < arr4.length; i++) {
  if (arr4[0] != arr4[i]) {
 arr4[i] = arr4[i].slice(0, 1).toUpperCase() + arr4[i].slice(1)
 }
}
let result5 = arr4.join("")
console.log(result5)
