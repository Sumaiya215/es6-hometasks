const instructor = [
    {name: 'Nodi', age:28,position:'Senior'},
    {name: 'Akil', age:28,position:'Junior'},
    {name: 'Shobuj', age:28,position:'Senior'}
]

const output = instructor.filter(instructor => instructor.position === 'Senior')
.map(instructor => instructor.name);
console.log(output);