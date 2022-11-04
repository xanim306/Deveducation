// 1st task
//  let A=+prompt("Please enter the number:");
//  while (isNaN(A) ||A==""){
//      A=+prompt("Value must be a number.Please try again.:");
   
//  }
//  for (let i = 0; i < 1000; i++) {
//     if (i%A==0) {
//       console.log(i);
//     }
//  }


//2nd task
// let A=+prompt("Please enter the number:");
// while (isNaN(A) ||A==""){
//         A=+prompt("Value must be a number.Please try again.:");
       
//     }
// let n=0;
// let count=0;
// while (Math.pow(n,2)<A) {
//      count++;
//      n++;
// }
// console.log(`Count:${count}`);



//3rd task
// let A=+prompt("Please enter the number:");
// while (isNaN(A) || A==""){
//     A=+prompt("Value must be a number.Please try again.:");
     
//    }
// let largestDiv=0;
// for (let divisor = 1; divisor < A; divisor++) {
//     if(A%divisor==0){
//         largestDiv=divisor;
//     }
// }
// console.log(largestDiv);


//4th task
// let A=+prompt("Please enter the first number:");
// while (isNaN(A) ||A==""){
//     A=+prompt("Value must be a number.Please try again.:");
//    }
// let B=+prompt("Please enter the second number:");
// while (isNaN(B) ||B==""){
//  B=+prompt("Value must be a number.Please try again.:");

// }
// let num=A;
// let sum=0;
// if (B<=A) {
//     alert('A should be less than B!')
// }
// else{
//     while (num>=A && num<=B) {
//         if (num%7==0) {
//             sum+=num;
//         }
//         num++;
//     }
//     console.log(`Sum: ${sum}`);
// }


//5th task
// let N=+prompt("Please enter a number:");
// while (isNaN(N) || N==""){
//  N=+prompt("Value must be a number.Please try again.:");
  
// }
// let num1=1;
// let num2=1;
// let result;
// let count=2;
// if(N==2 || N==1){
//     result=1;
//     console.log(result);

// }
// for (let i = 0; i < N; i++) {
//     result=num1+num2;
//     num1=num2;
//     num2=result;
//     count++;
//     if (count==N) {
//     console.log(`The ${N}th Fibonacci number is ${result}`);        
//     }

// }


//6th task
// let A=+prompt("Please enter the first number:");
// while (isNaN(A) || A==""){
//     A=+prompt("Value must be a number.Please try again.:");
     
//    }
// let B=+prompt("Please enter the second number:");
// while (isNaN(B) || B==""){
//     B=+prompt("Value must be a number.Please try again.:");
     
//    }
// let remainder;
// let result;
// let gcd;

// if (A>B) {
//    while (true) {
//     remainder=A%B;
//        if (B%remainder===0) {
//            gcd=remainder;
//            console.log(`The GCD is ${gcd}`);
//                   break;
//        }
//       else{
//          A=B;
//          B=remainder;
//          continue;
//       }
//    }

// }
// else if (A<B) {
//    while (true) {
//     remainder=B%A;
//        if (A%remainder===0) {
//            gcd=remainder;
//            console.log(`The GCD is ${gcd}`);

//                   break;
//        }
//       else{
//          B=A;
//          A=remainder;
//          continue;
//       }
//    }
// }
// else{
//     alert('These numbers are equal.These numbers do not have GCD.')
// }


//7th task
// let A=+prompt("Please enter a number:");
// while (isNaN(A) || A==""){
//  A=+prompt("Value must be a number.Please try again.:");
  
// }
// let reversed=0;
// while (A>0){
//     reversed*=10;
//     reversed+=A%10;
//     A=Math.floor(A/10);
// }
// console.log(reversed);

//8th task
// let A=+prompt("Please enter the first number:");
// while (isNaN(A)){
//     A=+prompt("Value must be a number.Please try again.:");
     
//    }
// let B=+prompt("Please enter the second number:");
// while (isNaN(B)){
//     B=+prompt("Value must be a number.Please try again.:");
     
//    }
//    let digit=0;
// while (A>0) {
//     digit=A%10;
//     if (B.toString().includes(digit.toString())) {
//         console.log('YES!');
//         break;
//     }
//     A=(A-digit)/10;
    
// }
// if (A<=0 && !B.toString().includes(digit.toString())) {
//     console.log('NO!');
    
// }


