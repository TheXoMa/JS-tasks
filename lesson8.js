
 let arrA = [1, 2, 3]
 let arrB = [4, 5, 6]
 let a = arrA.concat(arrB)
 console.log(a)


let arrC = [1, 2, 3]
arrC.reverse()
 console.log(arrC)



let arrK = [1, 2, 3]
arrK.push(4, 5, 6)
console.log(arrK)


let arrL = [1, 2, 3]
arrL.unshift(4, 5, 6)
 console.log(arrL)

arr = ["js", "css", "jq"]
 let elem = arr.shift()
console.log(elem)

let arr2 = ["js", "css", "jq"]
let elem2 = arr2.pop()
 console.log(elem2)

let arr3 = [1, 2, 3, 4, 5]
let sub = arr3.slice(0, 3)
console.log(sub)


 let arr4 = [1, 2, 3, 4, 5]
 let sub2 = arr4.slice(3)
console.log(sub2)

let arr5 = [1, 2, 3, 4, 5]
 arr5.splice(1, 2)
console.log(arr5)


 let arr6 = [1, 2, 3, 4, 5]
 arr6.splice(0, 1)
arr6.splice(-1, 1)
console.log(arr6)


let arr7 = [1, 2, 3, 4, 5]
 arr7.splice(3, 0, "a", "b", "c")
console.log(arr7)


let arr8 = [1, 2, 3, 4, 5]
arr8.splice(1, 0, "a", "b")
 arr8.splice(5, 0, "c")
arr8.splice(-1, 0, "e")
console.log(arr8)


let arr9 = [3, 4, 1, 2, 7]
console.log(arr9.sort())


let obj = { js: "test", jq: "hello", css: "world" }
 console.log(Object.keys(obj))
