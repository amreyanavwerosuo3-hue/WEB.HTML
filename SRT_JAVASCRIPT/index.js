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



// ternary operator

const appUsername ="1";

const welcomeUser = appUsername ? `welcome back;  ${appUsername}` : `please login, guest`; 

console.log(welcomeUser);

const userAge = 22;
const requiredAge = userAge >= 18 ? 'yes can vote' : 'you can not vote';

console.log(requiredAge)

// loops and full loop

const localFoodlist = ["banga", "egusi", "ogbono", "afang", "ofaku", "vegetable", "okro"];

for (let i = 0; i < localFoodlist.length; i++) {
    console.log(localFoodlist[i]);
}


const classNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < classNumber.length; i++) {
    console.log(classNumber[i]); }

    const studentName = 'justice'

    for (let i = 0; i < studentName.length; i++) {
        console.log(studentName[i]);
    }

    const webStudents = ['enoch', 'alex', 'biggie', 'mary', 'james','arthur'];

    for (let student of webStudents) {
        console.log(student);
    }

    // loop through an object using for in

    const modelDetails = {
        up: 'head',
        middle: 'body',
        down: 'legs',
    };

    for (let item in modelDetails) {
        console.log( modelDetails[item]);
    }


const hobbies = ["swimming", "football", "cooking"];

for (let hobbie in hobbies) {
    console.log(hobbies[hobbie]); }


    const details = {
        name : 'justice',
        age : 22,
        status: 'single',
        skill : 'programming',

    };

    for (let item in details) {
        console.log(details[item])
    }

    function totalprice(multiply) {
        let item = 5000;

        console.log(item * multiply)
    }

    totalprice(5000)






//    dom manipulation 

 const heading = document.querySelector('h2')

 console.log(heading)

 const teddy = document.querySelector('.text-area')

 console.log(teddy)

 const mute = document.querySelector('#mute')

 console.log(mute)

 const change = document.querySelector('.cane')

 change.textContent = 'JAVASCRIPT IS EASY'   

const form = document.querySelector('#form')

const userName = document.getElementById('username')

const email = document.getElementById ('email')

const passWord = document.getElementById('password')

const error = document.querySelector('.error')

form.addEventListener('summit', e => {
    e.preventDefault();

    if ( userName.value === '' || email.value === ''|| password.value ==='' ) {
        error.textContent = 'please fill in all field';
        error.style.color = 'red'
    }
     else{
        error.textContent = 'form submitted successfully';
        error.style.color ='green';
     }
} )