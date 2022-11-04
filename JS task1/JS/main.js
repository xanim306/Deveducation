// 1st task
// let A=prompt("Please enter the first value:");
// let B=prompt("Please enter the second value:");
// console.log(`Answer:${A/B}`,`Remainder:${A%B}`);

// // 2nd task
// let A=+prompt("Please enter the first value:");
// let B=+prompt("Please enter the second value:");
// const temp=A;
// A=B;
// B=temp;
// console.log(`The last value of A is:${A}`,`The last value of B is:${B}`);

// 3rd task
// let A=+prompt("Please enter the first value:");
// while(A==="" || A===0){
//     A=+prompt("The value can not be zero or empty.Please try again:");
// }
// let B=+prompt("Please enter the second value:");
// while (B==="" || B===0){
//     B=+prompt("The value can not be zero or empty.Please try again:")
// }
// let C=+prompt("Please enter the third value:")
// while(C==="" || C===0){
//     C=+prompt("The value can not be zero or empty.Please try again:")
// }
// let result=(C-B)/A;
// console.log(`Answer:${result}`);

// 4th task
// let A=+prompt("Please enter the first value:");
// let B=+prompt("PLease enter the second value:");
// if(A>B){
//     console.log(A+B);
// }
// else if(A===B){
//     console.log(A*B);
// }
// else{
//     console.log(A-B);
// }

// 5th task
// let A=+prompt("Please enter a:");
// let B=+prompt("Please enter b:");
// let C=+prompt("PLease enter c:");
// let root1;
// let root2;
// const discriminant=B*B-4*A*C;
// if(discriminant>0){
//     root1=(-B+Math.sqrt(discriminant))/2*A;
//     root2=(-B-Math.sqrt(discriminant))/2*A;
//     console.log(`The roots of quadratic equation are:${root1} and ${root2}`);
// }
// else if(discriminant==0){
//     root1=root2=-B/2*A;
//     console.log(`The roots of quadratic equation are:${root1} and ${root2}`);
// }
// else{
//     let realPart=(-B/2*A).toFixed();
//     let imaginaryPart=(Math.sqrt(discriminant))/2*A;
//     console.log(`The roots of quadratic equation are: (${realPart} + ${imaginaryPart}i) and (${realPart} - ${imaginaryPart}i)`);
// }

// 6th task
// let A = prompt("Please enter the number:");
// let firstPart;
// let secondPart;
// if (A.length !== 2) {
//   alert("You must enter two-digit number!");
// } else {
//   if (A.startsWith("2")) {
//     firstPart = "twenty";
//     secondPart = "";
//   }
//   if (A.startsWith("3")) {
//     firstPart = "thirty";
//     secondPart = "";
//   }
//   if (A.startsWith("4")) {
//     firstPart = "forty";
//     secondPart = "";
//   }
//   if (A.startsWith("5")) {
//     firstPart = "fifty";
//     secondPart = "";
//   }
//   if (A.startsWith("6")) {
//     firstPart = "sixty";
//     secondPart = "";
//   }
//   if (A.startsWith("7")) {
//     firstPart = "seventy";
//     secondPart = "";
//   }
//   if (A.startsWith("8")) {
//     firstPart = "eighty";
//     secondPart = "";
//   }
//   if (A.startsWith("9")) {
//     firstPart = "ninety";
//     secondPart = "";
//   }
//   if (A == 10) {
//     console.log("ten");
//     firstPart = "";
//     secondPart = "";
//   }

//   if (A == 11) {
//     console.log("eleven");
//     firstPart = "";
//     secondPart = "";
//   }
//   if (A == 12) {
//     console.log("twelve");
//     firstPart = "";
//     secondPart = "";
//   }
//   if (A == 13) {
//     console.log("thirteen");
//     firstPart = "";
//     secondPart = "";
//   }
//   if (A == 14) {
//     console.log("fourteen");
//     firstPart = "";
//     secondPart = "";
//   }
//   if (A == 15) {
//     console.log("fifteen");
//     firstPart = "";
//     secondPart = "";
//   }
//   if (A == 16) {
//     console.log("sixteen");
//     firstPart = "";
//     secondPart = "";
//   }
//   if (A == 17) {
//     console.log("seventeen");
//     firstPart = "";
//     secondPart = "";
//   }
//   if (A == 18) {
//     console.log("eighteen");
//     firstPart = "";
//     secondPart = "";
//   }
//   if (A == 19) {
//     console.log("nineteen");
//     firstPart = "";
//     secondPart = "";
//   }

//   if (A.endsWith("1", 2) == true && !A.startsWith("1")) {
//     secondPart = "one";
//   }
//   if (A.endsWith("2", 2) == true && !A.startsWith("1")) {
//     secondPart = "two";
//   }
//   if (A.endsWith("3", 2) == true && !A.startsWith("1")) {
//     secondPart = "three";
//   }
//   if (A.endsWith("4", 2) == true && !A.startsWith("1")) {
//     secondPart = "four";
//   }
//   if (A.endsWith("5", 2) == true && !A.startsWith("1")) {
//     secondPart = "five";
//   }
//   if (A.endsWith("6", 2) == true && !A.startsWith("1")) {
//     secondPart = "six";
//   }
//   if (A.endsWith("7", 2) == true && !A.startsWith("1")) {
//     secondPart = "seven";
//   }
//   if (A.endsWith("8", 2) == true && !A.startsWith("1")) {
//     secondPart = "eight";
//   }
//   if (A.endsWith("9", 2) == true && !A.startsWith("1")) {
//     secondPart = "nine";
//   }
// }
// console.log(` ${A} --> ${firstPart} ${secondPart}`);

// 7th task
// let x=+prompt('Please enter x:');
// let y=+prompt('Please enter y:');
// let r=+prompt('Please enter radius of circle:');
// let xCircCenter=0;
// let yCircCenter=0;
// // r=Math.sqrt(x*x+y*y);
// let d=Math.sqrt(Math.pow(xCircCenter-x,2)+Math.pow(yCircCenter+y,2)) //distance
// if (d>r) {
//     console.log(`The point (${x},${y}) is outside of circle.`);
// }
// else if (d==r) {
//     console.log(`The point (${x},${y}) is on the circle.`);
// }
// else {
//     console.log(`The point (${x},${y}) is inside of circle.`);
// }
