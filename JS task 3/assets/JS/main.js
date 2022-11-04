//1st task
//let A=getNumberFromUser('Please enter a number:');
// function Print() {
//     let num;
//     for (let i = 0; i < 1000; i++) {
//         if (i%A===0) {
//             console.log(i);
//         }
//     }
   
// }
// Print();

//2nd task
// let A=getNumberFromUser('Please enter a number:');
// function findCount() {
//     let count=0;
//     for (let i = 0; i*i <A ; i++) {
//         count++;
        
//     }
//     console.log(`Count:${count}`);
// }
// findCount();


//3rd task
//  let A=getNumberFromUser("Please enter a number: ");
//  findLargestDivisor();
// function findLargestDivisor() {
//     let largestDiv=0;
//     for (let divisor = 1; divisor < A; divisor++) {
//             if(A%divisor==0){
//                 largestDiv=divisor;
//             }
//     }
//     console.log(largestDiv);
// }

//4th task
// let A=getNumberFromUser("Please enter the first number:");
// let B=getNumberFromUser("Please enter the second number:");
// findSum();
// function findSum() {
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
// }

//5th task
// let N=getNumberFromUser("Please enter a number:");
// findNthFibonacciNum();
// function findNthFibonacciNum() {
//     let num1=1;
//     let num2=1;
//     let result;
//     let count=2;
//  if(N==2 || N==1){
//         result=1;
//         console.log(result);
    
//  }
//  for (let i = 0; i < N; i++) {
//         result=num1+num2;
//         num1=num2;
//         num2=result;
//         count++;
//         if (count==N) {
//         console.log(`The ${N}th Fibonacci number is ${result}`);        
//         }  
        
//  }
// }


//6th task
// let A=getNumberFromUser("Please enter the first number:");
// let B=getNumberFromUser("Please enter the second number:");
// GCDCalculator();
// function GCDCalculator() {
// let remainder;
// let gcd;

// if (A>B) {
//    while (true) {
//     remainder=A%B;
//        if (B%remainder===0) {
//            gcd=remainder;
//            console.log(`The GCD is ${gcd}`);
//             break;
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
//             break;
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
// }

//7th task
// let A=getNumberFromUser("Please enter a number:");
// function Reverse() {
//     let reversed=0;
//  while (A>0){
//     reversed*=10;
//     reversed+=A%10;
//     A=Math.floor(A/10);
//  }
//  console.log(reversed);
// }

// Reverse();


//8th task
// let A=getNumberFromUser("Please enter the first number:");
// let B=getNumberFromUser("Please enter the second number:");
// function findSameDigit() {
//     let digit=0;
//     while (A>0) {
//         digit=A%10;
//         if (B.toString().includes(digit.toString())) {
//             console.log('YES!');
//             break;
//         }
//         A=(A-digit)/10;
        
//     }
//     if (A<=0 && !B.toString().includes(digit.toString())) {
//         console.log('NO!');
        
//     }
// }
// findSameDigit();


// function getNumberFromUser(message) {
//     let userValue;
//     let alertMsg=false;
//     do {
//         if (alertMsg) {
//             alert('Value must be a number!')
//         }
//        userValue=+prompt(message) ;
//        alertMsg=true;
//     } while (isNaN(userValue));
//     return userValue;
// }



