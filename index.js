var num = [12, 323, 323, 234,44324, 4324] ;
var num1 = 40 ;
// var equal = num === num1 ;

// console.log(typeof equal)

const num2 = 30.5 ;
const num3 = 50.53;
// console.log(parseFloat(num2 + num3))


// const names = 'nobody';

// if(names === "sadik"){
//     console.log('he is web developer')
// }
// else if(names === 'naruto'){
//     console.log('he is a ninja and hokage')
// }
// else{
//     console.log('nobody here')
// }

const person = {name: 'sadik', age: 30 , job: 'n/a'}

// console.log(person) 

const data = [
    {name: 'sadik', age: 30 , job: 'n/a'},
    {name: 'naruto', age: 33 , job: 'hokage'},
    {name: 'luffy', age: 19 , job: 'pirate'},
]

data.push({name: 'tanjiro', age: 17 , job: 'demon slyer'})

const names = data.map(names => names.name)
const updatedData = data.filter(item => item.name !== 'naruto');
data.pop()
console.log(updatedData)