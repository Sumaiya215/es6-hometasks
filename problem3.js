// const squareAverage = (x) =>{
//     let sum=0, average = 0;
//     x.forEach((item)=>{
//         let square = item*item;
//          sum = sum + square; 
//           average = (sum/x.length); 
         
//     })
//     return average;
// }

// const x =[2,4,5,7,11];
// console.log(squareAverage(x));

const averageOfSquares = (arr) => {
    const sumOfSquares = arr.reduce((acc, num) => acc + num ** 2, 0); 
    return sumOfSquares / arr.length; 
};


const numbers = [2,4,5,7,11];
console.log(averageOfSquares(numbers)); 
