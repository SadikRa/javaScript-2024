var num = [12, 323, 323, 234, 44324, 4324];
var num1 = 40;
// var equal = num === num1 ;

// console.log(typeof equal)

const num2 = 30.5;
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

const person = { name: "sadik", age: 30, job: "n/a" };

// console.log(person)

const data = [
  { name: "sadik", age: 30, job: "n/a" },
  { name: "naruto", age: 33, job: "hokage" },
  { name: "luffy", age: 19, job: "pirate" },
];

data.push({ name: "tanjiro", age: 17, job: "demon slyer" });

const names = data.map((names) => names.name);
const updatedData = data.filter((item) => item.name !== "naruto");
data.pop();
// console.log(updatedData)

const numbers = [12, 22, 33, 45, 56, 68, 79, 80, 99, 107, 115 ];

for (var i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]) 
}

for (let index = 0; index < 11; index++) {
//    console.log(index)
    
}

const namess = ['sadik', 'luffy', 'naruto', 'lee']

// for(let i = 0; i < namess.length ; i++){
//     var n = namess[i]

//     if(n == 'naruto'){
//         console.log('hokage')
//     }
//     else{
//         console.log('pirate king ')
//     }
// }

function  sum(params) {
    console.log('sadik')
} 

// sum()

const multi = async (id) => {
    try {
        const response = [
            { name: "sadik", age: 30, job: "n/a" },
            { name: "naruto", age: 33, job: "hokage" },
            { name: "luffy", age: 19, job: "pirate" },
        ];
        const processedData = response.map(item => {
            return {
                ...item,
                description: `${item.name} is ${item.age} years old and works as a ${item.job}.`
            };
        });
        return processedData;

    } catch (error) {
        console.error("Error in multi function:", error)
        return null;
    }
};

// Example usage
// multi().then(data => console.log(data));


function sum1(a, b) {
    var result = (a + b);
    return result;
}

console.log(sum1(2, 3))
