// const arr=[50,3,74,15,22,99,45];


//1st task

// function findMin(array) {
//     let min=array[0];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i]<min) {
//             min=array[i];
//         }
        
//     }
//     return min;
// }
// console.log(findMin(arr));

//2nd task

// function findMax(array) {
//     let max=array.at(-1);

//     for (let i = 0; i < array.length; i++) {
//         if (array[i]>max) {
//             max=array[i];
//         }
        
//     }
//     return max;
// }
// console.log(findMax(arr));


//3rd task

// function findIOfMin(array) {
//     let min=array[0];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i]<min) {
//             min=array[i];       
//         }
        
//     }
//     let index=array.indexOf(min);
//     return index;
// }
// console.log(findIOfMin(arr));


//4th task
// function findIOfMax(array) {
//     let max=array.at(-1);

//     for (let i = 0; i < array.length; i++) {
//         if (array[i]>max) {
//             max=array[i];            
//         }
        
//     }
//     let index=array.indexOf(max);
//     return index;
// }
// console.log(findIOfMax(arr));



//5th task

// function sumOfOddI(array) {
//     let sum=0;
//     for (let i = 1; i < array.length; i+=2) {
//         sum+=array[i];
        
//     }
//     return sum;
// }
// console.log(sumOfOddI(arr));



//6th task
//1st way
// function Reverse(array) {
//     let n =array.length-1;
//     for (let i = 0; i <= n/2; i++) {
//         let temp=array[i];
//         array[i]=array[n-i];
//         array[n-i]=temp;
//     }
//     return array;
// }
// console.log(Reverse(arr));


//2nd way
// function Reverse(array) {
//     array.reverse();
//     return array;
// }
// console.log(Reverse(arr));



//7th task

// function countOfOddNum(array) {
//     let count=0;
//    for (let i = 0; i < array.length; i++) {
//     if (array[i]%2!==0) {
//         count++;
//     }
//    }
//    return count;
// }
// console.log("Count of odd numbers:",countOfOddNum(arr));



//8th task
// function swapHalf(array) {
//       let n=(array.length/2).toFixed(0);
//            for (let i = 0; i < n; i++) {
//                   if (n<array.length) {
//                         let temp;
//                         temp=array[i];
//                         array[i]=array[n];
//                         array[n]=temp;
//                         n++;
                        
//                   }
                  
//             }
      
      
//       return array;

// }
  
// console.log(swapHalf(arr));

//9th task

// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j]>array[j+1]) {
//                 let temp;
//                 temp=array[j];
//                 array[j]=array[j+1];
//                 array[j+1]=temp;
    
//             }
            
//         }
    
        
//     }
//     return array;
// }
// console.log(bubbleSort(arr));


// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let min=i;

//         for (let j =i+1; j < array.length; j++) {
//             if (array[j]<array[min]) {
//                 min=j;
//             }
           
//         }
//         if (min !== i) {
//             [array[i], array[min]] = [array[min], array[i]]
//         }
        
//     }
//     return array;
// }
// console.log(selectionSort(arr));
//  function insertionSort(array) {
//     for (let i = 1; i < array.length; i++) {
//         let currentValue = array[i]
//         let j;
//         for ( j = i-1; j>=0 && array[j] > currentValue; j--) {
//             array[j+1]=array[j]
            
//         }
//         array[j+1]=currentValue;
        
//     }
//     return array;
//  }
// console.log(insertionSort(arr));



//10th task
// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[j]<array[j+1]) {
//                 let temp;
//                 temp=array[j];
//                 array[j]=array[j+1];
//                 array[j+1]=temp;
    
//             }
            
//         }
    
        
//     }
//     return array;
// }
// console.log(bubbleSort(arr));
