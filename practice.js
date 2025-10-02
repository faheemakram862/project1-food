let fruits=['mangoe','apple','grapes','banana'];
console.log(fruits[0]);
console.log(' ');
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
console.log(' ');
fruits.push('grapefruit');


for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
console.log(' ');
fruits.unshift('orange');
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
console.log(' ');
fruits.shift();
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
console.log('nnn ');
for(let fruit of fruits)
{
    
    console.log(fruit);
}
console.log('nnn ');
let numbers=[1,2,3,4,5];

let squares=numbers.map(n=>n*n);
console.log(squares);

let mul=numbers.reduce((acc,n)=>acc*n);
console.log(mul);

let multi=numbers.slice(1,4).reduce((acc,n)=>acc+n);
console.log(multi);
let evens = numbers.filter(n => n % 2 != 0);
console.log(evens);

let student={
    greet:function()
    {console.log('hello, how you are doing man!' + this.name)},
    name:'faheem',
    age:26,
    isEnrolled:true
};

console.log(student.age);
student.stat='allive';
console.log(student.stat);
delete student.stat;
console.log(student.stat);
student.greet();
console.log(student);

let book = {
title:'java script basics',
author:'john',
year:'2025'
};
for(let key in book)
{
    console.log(key +'::' +book[key]);
}


let person=[
    {name:'faheem',grade:'A',age:25},
    {name:'Aqsa',grade:'A',age:23},
    {name:'Saif',grade:'B',age:21}
];
person.forEach(person=>{console.log(person.name+" got "+person.grade);});