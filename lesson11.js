
let flag = true;
let a = [1, 8, 11, , 5, 5, 6, 5, 7, 8, 6, 5];
 for (i = 0; i < a.length; i++) {
    flag = true;
    break;
 }
 
 if ((flag = true)) {
console.log("Yes");
 } else {
console.log("No");
 }


 let b = 31;
 let flag2 = false;
for (var i = 2; i < b; i++) {
 if (a % i == 0) {
   flag2 = true;
   break;
  }
 }
 if (flag2 == true) {
  console.log("true");
 } else {
 console.log("false");
}


let arr = [4, 9, 8, 56, 32, 4, 8, 8, 93, 2, 12, 3, 5, 6, 5, 7, 8];
let flag3 = false;
 for (i = 0; i < arr.length; i++) {
 if (arr[i] == arr[i - 1]) {
   flag3 = true;
   break;
  }
 }
 if (flag3 == true) {
   console.log("true");
} else {
  console.log("false");
 }
