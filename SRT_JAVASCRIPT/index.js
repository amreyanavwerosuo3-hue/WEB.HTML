 console.log('hello alex how are you');
// variables

let age =30;
let name= 'james';

console.log(`${name} is ${age} years old thi year`);


// seatwork

let NAME ='choima';
let parent_name ='emmanuels';

console.log(`${NAME} is the first child of are parents which is the family of ${parent_name} `)

const testscore = 70;
const examscore = 100; 

const total = testscore+examscore;

console.log(`his testscore ${testscore} and his examscore is ${examscore} so the total he scored is ${total}`)

const text = `JUSTICE`;

console.log(text.toLowerCase()) 

console.log(text.length) 

const test = `    take my money and go`  ;

console.log(test.trim())

console.log(test.slice(0,17))

console.log(test.includes(`money`))

const userfullname = `Justice avwerosuo amreyan`
const singularNames = userfullname.split(` `);
const firstname = singularNames[0];

console.log(`Welcome Back, ${firstname}` )

const bestFoods =`beans and bread`
const changeFood = bestFoods.replace('bread','okro soup')

console.log(changeFood)

const cvFile =`https:justiceamreyan26`
const protfolioFile =`url:justiceamreyan26`

console.log(cvFile.startsWith(`https`))
console.log(protfolioFile.endsWith(`https`))
console.log(cvFile[0])  

const Userage = 19
const prices = 195
const currency = 0.000088887766666

console.log(typeof Userage.toString());
console.log(typeof prices.toString());
console.log(prices.toString() + 100);
console.log(currency.toFixed(6))
console.log(parseInt(prices) + 100)


// class work

const register = ['bola','yemi','ade','beauty','faith'];

console.log(register.includes('yemi'))
console.log(register.includes('bisola'))

register.push('boaz');

register.sort();

register.forEach(name => {
    console.log(`this student were present ${name}`);
});

// object

const user1name = 'johnson';
const user1age = 30;
const user1email = 'johnson@gmail.com';
const user1bestFoods = 'pap and garri';
const user1hasMarried = true;
const user1hasFamily = true;
const user1health = false;

const user1 = {
    name: 'johnson',
    age: 30,
    email:'johnson@gmail.com',
    bestFoods: 'pap and garri',
    hasMarried: true ,
    hasFamily: true,
    health: false,

}
user1.name ='faith';
user1.bestFoods = 'okro and bread';

console.log(user1)

console.log(`does he have family ${user1.hasMarried}`)

// operators

// Arithmethics

const num1 =40;
let num2 = 30;

num2 += 20;

console.log(num1 + num2);
console.log(num1 / num2);
console.log(num1 - num2);
console.log(num1 * num2);

let shoppingItems = [];

shoppingItems += 'shoe';

shoppingItems += ' bag';

console.log(shoppingItems); 


// seat work

let availableBalance = 2000;

let dailySpending = 1500

availableBalance += 1500;

availableBalance += 2000;

availableBalance -= 1500;

availableBalance -= 100;

console.log(availableBalance - dailySpending)

console.log(availableBalance)



// comparison operators

const price1 = 110;
const price2 ='10';

console.log(price1 === price2);

console.log(price1 !== price2);

console.log(price1 > price2);
console.log(price1 <= price2);
console.log(price1 < price2);
console.log(price1 >= price2);



