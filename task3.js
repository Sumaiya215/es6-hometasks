const people =[
    {name:'Meena', age:20},
    {name:'Rina', age:15},
    {name:'Suchorita', age:22}
]

const sumOfAge = people.reduce((sum, current)=> sum + current.age,0);
console.log(sumOfAge);