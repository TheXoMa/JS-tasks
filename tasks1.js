// Boolean38
// let firstFirst =  prompt("Введіть 1 координату 1 клітки дошки")
// let firstSecond =  prompt("Введіть 2 координату 1 клітки дошки")
// let secondFirst =  prompt("Введіть 1 координату 2 клітки дошки")
// let secondSecond =  prompt("Введіть 2 координату 2 клітки дошки")

// if ((firstFirst-secondFirst)==(firstSecond-secondSecond) || (firstFirst==secondFirst) || (firstSecond==secondSecond) ){
//     console.log("Може")
// }
// else{
//     console.log("Не може") 
// }

// Boolean39
// let firstFirst =  prompt("Введіть 1 координату 1 клітки дошки")
// let firstSecond =  prompt("Введіть 2 координату 1 клітки дошки")
// let secondFirst =  prompt("Введіть 1 координату 2 клітки дошки")
// let secondSecond =  prompt("Введіть 2 координату 2 клітки дошки")

// if ((firstFirst-secondFirst)==(firstSecond-secondSecond) || (firstFirst==secondFirst) || (firstSecond==secondSecond) ){
//     console.log("Може")
// }
// else{
//     console.log("Не може") 
// }

// Boolean40
// let firstFirst =  prompt("Введіть 1 координату 1 клітки дошки")
// let firstSecond =  prompt("Введіть 2 координату 1 клітки дошки")
// let secondFirst =  prompt("Введіть 1 координату 2 клітки дошки")
// let secondSecond =  prompt("Введіть 2 координату 2 клітки дошки")

// if (Math.abs((firstFirst-secondFirst) == 1) & Math.abs((firstSecond-secondSecond) == 1) ) {
//     console.log("Може")

// }
// else{
//     console.log("Не може") 
// }

// if18
// let a = prompt("Введіть 1 число")
// let b = prompt("Введіть 2 число")
// let c = prompt("Введіть 3 число")

// if (a==b){
//     alert("третє")
// }
// else if ( b==c){
//     alert("перше")
// }
// else{
//     alert("друге")
// }

// if19
// let a = prompt("Введіть 1 число")
// let b = prompt("Введіть 2 число")
// let c = prompt("Введіть 3 число")
// let d = prompt("Введіть 3 число")

// if ((a==b) & (b==d)){
//     alert("третє")
// }
// else if (( b==c) &(c==d)){
//     alert("перше")
// }
// else if (( a==c) &(c==d)){
//     alert("друге")
// }
// else{
//     alert("четверте")
// }

// if20
// let a = prompt("Введіть координату А")
// let b = prompt("Введіть координату B")
// let c = prompt("Введіть координату C")

// if (Math.abs(a-b)< Math.abs(a-c)){
//     alert("Ближче точка B." + " " + "Вони знаходяться на відстані" + " "+ Math.abs(a-b))
// }
// else{
//     alert("Ближче точка C." + " " + "Вони знаходяться на відстані" + " "+ Math.abs(a-c))
// }

// if21
// let x = prompt("Введіть координату x")
// let y = prompt("Введіть координату y")

// if ((x==0) & (y==0)){
//     alert("0")
// }
// else if ((x==0) & (y!==0)){
//     alert("1")
// }
// else if ((x!==0) & (y==0)){
//     alert("2")
// }
// else{
//     alert("3")
// }


// if22
// let x = prompt("Введіть координату x")
// let y = prompt("Введіть координату y")

// if ((x>0) & (y>0)){
//     alert("I чверть")
// }
// else if ((x<0) & (y>0)){
//     alert("II чверть")
// }
// else if ((x<0) & (y<0)){
//     alert("III чверть")
// }
// else{
//     alert("IV чверть")
// }


// if23
// let x1= prompt("Введіть координату x першої сторони прямокутника ")
// let y1= prompt("Введіть координату y першої сторони прямокутника ")
// let x2= prompt("Введіть координату x другої сторони прямокутника ")
// let y2= prompt("Введіть координату y другої сторони прямокутника ")
// let x3= prompt("Введіть координату x третьої сторони прямокутника ")
// let y3= prompt("Введіть координату y третьої сторони прямокутника ")
// let x4=0
// let y4=0
// if (x1==x2){
//     x4=x3
// }
// else if (x1==x3){
//     x4=x2
// }
// else if (x1==x3){
//     x4=x2
// }

// if (y1==y2){
//     y4=y3
// }
// else if (y1==y3){
//     y4=y2
// }
// else if (y1==y3){
//     y4=y2
// }
// alert("Координати 4 точки"+" "+ x4 +" "+y4)

// if24
// let x= prompt("Введіть x")
// if (x>0){
//     console.log("", 2*Math.sin(x))
// }
// else{
//     console.log(6-x)
// }

// if25
// let x= prompt("Введіть x")
// if ((x>2) || (x<-2)){
//     console.log(2*x)
// }
// else{
//     console.log(-3*x)
// }
// if26
// let x= prompt("Введіть x")
// if (x<=0){
//     console.log(-x)
// }
// else if(((x>0) & (x<2))){
//     console.log(x**2)
// }
// else{
//     console.log(4)
// }

// if27
// let x= prompt("Введіть x")
// if (x<=0){
//     console.log(0)
// }
// else if(Math.trunc(x) % 2 ==0){
//     console.log(1)
// }
// else{
//     console.log(-1)
// }

// if28
// let x= prompt("Введіть рік")
// if ((x % 100) == 0){
//     if ((x % 400)==0){
//         console.log("366")  
//     }
//     else{
//         console.log ("365")
//     }

// }
// else if (x % 4 == 0){
//     console.log ("366");

// }
//     else{
//     console.log ("365")
// }

// if29
// let x= prompt("Введіть число")

// if (x==0){
//     console.log("Гуль")
// }
// else if (x>0) {
//     console.log("Додатнє")
// }
//     else{
//         console.log("Відємне")
//     }
// if (x % 2 ==0){
//     console.log("парне")
// }
// else{
//     console.log("непарне")
// }
// console.log("число")
// if30
// let x= prompt("Введіть число")

// if (x==0){
//     console.log("Ноль")
// }
// else if (x % 2 ==0 ) {
//     console.log("Парне")
// }
//     else{
//         console.log("Непарне")
//     }
// if (x>99){
//     console.log("трьохзначне")
// }
// else if ((x<=99)&(x>9)){
//     console.log("двозначне")
// }
// else{
//         console.log("однозначне")
// }
// console.log("число")

// for12
// let n= prompt("Введіть число N")
// let r=1
// for (let i = 0; i < n; i++){
//     r = r*(1 + 0.1*i)
// }
// console.log(r)

// for13
// let n= prompt("Введіть число N")
// let r=0
// let k=-1
// for(let i=0; i<n; i++){
//     k=k*(-1)
//     r=r+k*(1+0.1*i)
//     console.log(r)
// }
// console.log(r)

// for14
// let n= prompt("Введіть число N")
// let r=0
// for (let i = 0; i < n; i++) {
//     r= r+(2*i-1)    
// }
// console.log(r)

// for15
// let a= prompt("Введіть число a")
// let n= prompt("Введіть число n")
// let r=1
// for (let i = 0; i < n; i++) {
//     r= r*a
// }
// console.log(r)

// for16
// let a= prompt("Введіть число a")
// let n= prompt("Введіть число n")
// let r=1
// for (let i = 0; i < n; i++) {
//     r= r*a
//     console.log(r)
// }

// for17
// let a= prompt("Введіть число a")
// let n= prompt("Введіть число n")
// let r=1
// let s=1
// for (let i = 0; i < n; i++) {
//     r= r*a
//     s= s+r

// }
// console.log(s)

// for18
// let a= prompt("Введіть число a")
// let n= prompt("Введіть число n")
// let r=1
// let s=1
// for (let i = 0; i < n; i++) {
//     r= r*a*(-1)
//     s= s+r
//     console.log(s)

// }
// console.log(s)

// for19
// let n= prompt("Введіть число N")
// let r=1
// for (let i = 0; i < n; i++) {
//     r= r*(i+1)    
// }
// console.log(r)

// for20
// let n= prompt("Введіть число N")
// let r=1
// let k=0
// for (let i = 0; i < (n); i++) {
//     r= r*(i+1)  

//     k=k+r
// }
// console.log(k)

// for21
// let n= prompt("Введіть число N")
// let r=1
// let fak=1
// for (let i = 1; i < n; i++) {
//     fak=fak*i
//     r=r+(1/fak)
// }
// console.log(r)

// for22
// let x= prompt("Введіть число x")
// let n= prompt("Введіть число n")
// let r=1
// let fak=1
// let s=1
// for (let i = 1; i < n+1; i++) {
//     fak=fak*i
//     r=r*x
//     s=s+(r/fak)
// }
// console.log(s)

// while 16
// let p= prompt("Введіть процент?")
// let k=1
// let d=10
// let s=10

// while (s<=200){
//     d= d+d*(p/100)
//     s=s+d
//     console.log(d)
//     console.log(s)
// }
// console.log(d)

// while 17
// let n= prompt("Введіть n?")
// while(n>0){
//     console.log(n%10)
//     n=Math.floor(n/10)
// }

// while 18
// let n= prompt("Введіть n?")
// let s=0
// let numb=0
// let k=0
// while(n>0){
//     k=Math.floor(n%10)

//     s=s+k
//     n=Math.floor(n/10)
//     numb++
// }
// console.log(numb, s)

// while 19
// let n= prompt("Введіть n?")
// let r=0

// while(n>0){
//     r= r*10+(n%10)
//     n=Math.floor(n/10)
// }
// console.log(r)


// while 20
// let n= prompt("Введіть n?")
// let check=0

// while(n>0 & check==0){
//     if (n%10 == 2){
//         check = 1
//     }
//     n=Math.floor(n/10)
// }
// if (check==1){
//     console.log("True")
// }
// else{
//     console.log("False")
// }

// while 21
// let n= prompt("Введіть n?")
// let check=0

// while (n>0){
//     if (n%2 == 0){
//         check = 1
        
//     }
//     n=Math.floor(n/10)
// }
// if (check==1){
//     console.log("парне")
// }
// else{
//     console.log("непарне")
// }

// while 22
// let n= prompt("Введіть n?")
// let k=2
// while(k<(n-1)&(n%k)!=0){
//     k++
// }
// if (n%k !=0){
//     console.log("True")
// }
// else{
//     console.log("False")
// }

// while 23
// let a= parseInt(prompt("Введіть a?"))
// let b= parseInt(prompt("Введіть b?"))
// let s=0
// while(a!=0 & b!=0){
//     if (a>b){
//         a=a%b
//     }
//     else{
//         b=b%a
//     }
//     s=s+a+b
// }
// console.log(s)

// while 24
// let n= parseInt(prompt("Введіть n?"))
// let k1=1
// let k2=1
// let k=0
// while(k<n){
//     k=k1+k2
//     k2=k1
//     k1=k
// }
// if (k==n || n==1){
//     console.log("True")
// }
// else{
//     console.log("False")

// }

// while 24
// let n= parseInt(prompt("Введіть n?"))
// let k1=1
// let k2=1
// let k=0
// while(k<(n+1)){
//     k=k1+k2
//     k2=k1
//     k1=k
// }
// console.log(k)
// while 25
// let n= parseInt(prompt("Введіть n?"))
// let k1=1
// let k2=1
// let k=0
// while(k<(n)){
//     k=k1+k2
//     k2=k1
//     k1=k
// }
// console.log(k)
// console.log(k+k2)
