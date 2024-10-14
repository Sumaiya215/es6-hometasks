const numbers = [1,3,5,7,9];
//for of
const add1 =[];
for(let num of numbers){
    const even = num+1;
    add1.push(even);
}
console.log(add1);

// map
const result = numbers.map(n => n+1);
console.log(result);

// 2. filter and find
const arrayNumbers = [33,50,79,78,90,101,30];
const selected = arrayNumbers.filter(num => num%10 === 0);
console.log(selected);

const selected1 = arrayNumbers.find(n => n%10 === 0);
console.log(selected1);