//------------------------------------------  Arrays  -----------------------------------------------------------


// Array Creation---------------------------

const myArr1 = [1,2,3,4,5];
console.log(myArr1);                     // [ 1, 2, 3, 4, 5 ]

// const myArr2 = ["Hi", 1, true,()];    // ERROR : Unexpected token ')'

const myArr2 = ["Hi", 1, true, null];
console.log(myArr2);                    // [ 'Hi', 1, true, null ]


// Array Construction-----------------------

let brr = new Array(1, true, false, "Hi");
console.log(brr);                       // [ 1, true, false, 'Hi' ] 
console.log(typeof brr);                // console.log(typeof(brr));  =>  O/P:  object 


// Accessing Array--------------------------
console.log(brr[2]);                    // false
console.log(brr[6]);                    // undefined



// Built-In Methods-------------------------


// 1) push()

//const myAr1 = [1,2,3,4,5];
myArr1.push(6);
myArr1.push(7);
console.log(myArr1);               // [1, 2, 3, 4, 5, 6, 7]


// 2) pop()

myArr1.pop();
console.log(myArr1);               // [ 1, 2, 3, 4, 5, 6 ]


// 3) shift()

myArr1.shift();
console.log(myArr1);                // [ 2, 3, 4, 5, 6 ]


// 4) unshift()

myArr1.unshift("HI");
console.log(myArr1);                // [ 'HI', 2, 3, 4, 5, 6 ]


// 5) indexOf()
console.log(myArr1.indexOf(9));     // -1 [Not Present]
console.log(myArr1.indexOf(3));     // 2

// 6) includes()

console.log(myArr1.includes(9));    // false
console.log(myArr1);                // [ 'HI', 2, 3, 4, 5, 6 ]


// 7) join()

const newArr1 = myArr1.join();
console.log(myArr1);                // [ 'HI', 2, 3, 4, 5, 6 ]
console.log(newArr1);               // HI,2,3,4,5,6
console.log(typeof newArr1);        // string
 

// 8) slice()

const slicedArr = myArr1.slice(1,3);
console.log(slicedArr);             // [ 2, 3 ]
console.log(myArr1);                // [ 'HI', 2, 3, 4, 5, 6 ]


// 9) splice()

const splicedArr = myArr1.splice(1,3,"ABC", 'D', 'E', 'F', 'G', 'H', 'I');  // index values-removed insert-new-value
console.log(splicedArr);            // [ 2, 3, 4 ]
console.log(myArr1);                // [ 'Hi', 'ABC', 'D', 'E', 'F', 'G', 'H', 'I', 5, 6 ]


// 10) sort()

const arr = [8,9,3,6,1,9];
console.log(arr.sort());            // [ 1, 3, 6, 8, 9, 9 ]


// ---------------------------------------------------------------------------------------------------------------

const coding = ["Ruby", "JavaScript", "C++", "Python"];

const value = coding.forEach( (item) => {
    // console.log(item);            // Ruby JavaScript C++ Python
    return item;
});
console.log(value);                 // undefined ==>> forEach never returns value


// 11) filter()

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const newNums = myNums.filter((nums) => nums > 4);      // Implicitly return
console.log(newNums);               // [ 5, 6, 7, 8, 9, 10 ]  


const newNums2 = myNums.filter( (nums) => {
    nums > 4;
})
console.log(newNums2)               // []   becz    return is absent


const newNums3 = myNums.filter( (nums) => {
    return nums > 4;
})
console.log(newNums3)               // [ 5, 6, 7, 8, 9, 10 ]


const newNums4 = [];
myNums.forEach( (numberr) => {
    if(numberr > 4)
    {
        newNums4.push(numberr);
    }
});
console.log(newNums4);              // [ 5, 6, 7, 8, 9, 10 ]



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const genreHistory = books.filter( (bk) => bk.genre === "History");
console.log(genreHistory);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/


const editionGenre = books.filter( (bk) => {
    return bk.edition >= 1995 && bk.genre === "Non-Fiction";
});
console.log(editionGenre);
/*
[
  {
    title: 'Book Two',
    genre: 'Non-Fiction',
    publish: 1992,
    edition: 2008
  },
  {
    title: 'Book Four',
    genre: 'Non-Fiction',
    publish: 1989,
    edition: 2010
  }
]
*/



// 12) map()

const array1 = [1,2,3,4,5,6,7,8,9,10];


const array1Ans = array1.map( (num) => num + 10);
console.log(array1Ans);                             // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]  


const array2Ans = array1
            .map( (num) => num * 10)
            .map( (num) => num + 1)
            .filter( (num) => num > 40);

console.log(array2Ans);                             // [ 41, 51,  61, 71, 81, 91, 101 ]



// 13) reduce()


const redArr = [1,2,3]; 


const redAns = redArr.reduce( function(acc,currVal) {
    console.log(`Accumulator Value = ${acc} and Current Value = ${currVal}`);
    return acc + currVal;
},0);
console.log(redAns);
/*
Accumulator Value = 0 and Current Value = 1
Accumulator Value = 1 and Current Value = 2
Accumulator Value = 3 and Current Value = 3
6
*/


const redAns2 = redArr.reduce( function(acc,currVal) {
    console.log(`Accumulator Value = ${acc} and Current Value = ${currVal}`);
    return acc + currVal;
},3);
console.log(redAns2);
/*
Accumulator Value = 3 and Current Value = 1
Accumulator Value = 4 and Current Value = 2
Accumulator Value = 6 and Current Value = 3
9
*/


// Using Arrow Function -----

const redAns3 = redArr.reduce( (acc, currVal) => {
   return acc + currVal; 
},5);
console.log(redAns3);                            // 11


const redAns4 = redArr.reduce((acc,currVal) => acc + currVal,0);
console.log(redAns4);                           // 6


// Using Reduce method in Arrays having Object

const shoppingCart = [
    {
    itemName : "JS Course",
    price : 1000
    },
    {
        itemName : "Java Course",
        price : 1000
    },
    {
        itemName : "DSA Course",
        price : 1000
    },
    {
        itemName : "C++ Course",
        price : 1000
    },
]

const totalPrice = shoppingCart.reduce((acc,currVal) => acc + currVal.price, 0);
console.log(totalPrice);            // 4000


// -----  Array & Sub-Array  -----

const marvelHeros = ["Thor", "Hulk", "Ironman"];
const dcHeros = ["Flash", "Superman", "Batman"];


// 1) .push() -------------------------
marvelHeros.push(dcHeros);
console.log(marvelHeros);              // [ 'Thor', 'Hulk', 'Ironman', [ 'Flash', 'Superman', 'Batman' ] ]

console.log(marvelHeros[3]);           // [ 'Flash', 'Superman', 'Batman' ]
console.log(marvelHeros[3][2]);        // Batman


// 2) .concat() -----------------------
const marvelHeros1 = ["Thor", "Hulk", "Ironman"];
const dcHeros1 = ["Flash", "Superman", "Batman"];

// marvelHeros1.concat(dcHeros1);
// console.log(marvelHeros1);   =====>>>>   // [ 'Thor', 'Hulk', 'Ironman' ]

const allHeros1 = marvelHeros1.concat(dcHeros1);
console.log(allHeros1);                // [ 'Thor', 'Hulk', 'Ironman', 'Flash', 'Superman', 'Batman' ]


// spread method  ==>> ...  ----------

const marvelHeros2 = ["Thor", "Hulk", "Ironman"];
const dcHeros2 = ["Flash", "Superman", "Batman"];

// const allHeros2 = [...marvelHeros2] + [...dcHeros2];
// console.log(allHeros2);              // Thor,Hulk,IronmanFlash,Superman,Batman

const allHeros2 = [...marvelHeros2, ...dcHeros2];
console.log(allHeros2);                 // [ 'Thor', 'Hulk', 'Ironman', 'Flash', 'Superman', 'Batman' ]


// .flat() -----------------------------

const num = [1, 2, 3, 4, [ 1, 2, 3, 4, [ 9, 8, 7, 6] , 5, 3], 3];
const allNumbers = num.flat(Infinity);
console.log(allNumbers);                // [ 1, 2, 3, 4, 1, 2, 3, 4, 9, 8, 7, 6, 5, 3, 3]


// Array.isArray(), Array.from(), Array.of()

console.log(Array.isArray("ABC"));      // false
console.log(Array.isArray(['A','B','C']));      // true

console.log(Array.from("ABC"));         // [ 'A', 'B', 'C' ]
console.log(Array.from({"fName" : "Rinku", "age" : 25}));   // [] ==>> Gives Always Empty Array


const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));      // [ 100, 200, 300 ]



// ----------------------------------------  Objects  -------------------------------------------------------------

// Singelton => constructor Object.create (not with literals)
// Literals -------------------------------------------------

const mySym = Symbol("key1");
const mySym2 = Symbol("key2");

const jsUser = {
    name : "Peter",
    "full Name" : "Peter Clark",
    mySym : "mySym1",
    [mySym2] : "mySym2",
    age : 18,
    email : "peter@google.com",
    lastLoggedIn : ["Monady", "Saturday"]
}

console.log(jsUser.email);              // peter@google.com
console.log(jsUser["email"]);           // peter@google.com

//console.log(jsUser.full Name);       // SyntaxError : Can only be acced with []
console.log(jsUser["full Name"]);      // Peter Clark

console.log(jsUser.mySym);             // mySym1
console.log(typeof jsUser.mySym);      // string

console.log(jsUser[mySym2]);           // mySym2
console.log(typeof jsUser[mySym]);     // undefined ==>> catche 

jsUser.email = "peter@microsoft.com";
console.log(jsUser["email"]);          // peter@microsoft.com

// Object.freeze(jsUser);
jsUser.email = "peter@amazon.com";
console.log(jsUser["email"]);          // peter@microsoft.com  ==>> because object is freezed

// console.log(jsUser);                   

/*
{
    name: 'Peter',
    'full Name': 'Peter Clark',
    mySym: 'mySym1',
    age: 18,
    email: 'peter@microsoft.com',
    lastLoggedIn: [ 'Monady', 'Saturday' ],
    [Symbol(key2)]: 'mySym2' <-----------------------[ catched ]
}
*/

jsUser.greeting = function() {
    console.log("JS User just logged in");
}

jsUser.greeting2 = function() {
    console.log(`Hello JS User ${this.name} just logged in`);
}

console.log(jsUser.greeting);   
// [Function (anonymous)] <<== <Function return back> Function is not executed (reference only came)

console.log(jsUser.greeting());         // JS User just logged in    \n   undefined

console.log(jsUser.greeting2());        // Hello JS User Peter just logged in   \n   undefined




//---------------------------------------------------------------------------------------------------------------

const newObj = new Object();           // Singelton Object 
console.log(newObj);                   // {}

const newObj2 = {};                    // Non-Singelton Object 
console.log(newObj2);                  // {}

newObj2.id = "123";
newObj2.name = "Henry";
newObj2.isloggedIn = "false";

console.log(newObj2);                  // { id: '123', name: 'ABCD', isloggedIn: 'false' }

console.log(Object.keys(newObj2));     // [ 'id', 'name', 'isloggedIn' ]

console.log(Object.values(newObj2));   // [ '123', 'Henry', 'false' ]

console.log(Object.entries(newObj2));  // [ [ 'id', '123' ], [ 'name', 'Henry' ], [ 'isloggedIn', 'false' ] ]

console.log(newObj2.hasOwnProperty('id'));      // true
console.log(newObj2.hasOwnProperty('idea'));    // false



const regUser = {
    userName : {
        fullName : {
            firstName : "Andrew",
            lastName : "Jos"
        }
    }
}

console.log(regUser.userName);        // { fullName: { firstName: 'Andrew', lastName: 'Jos' } }
console.log(regUser.userName.fullName.firstName);       // Andrew


const obj1 = { 1 : "a" , 2 : "b"};
const obj2 = { 3 : "c" , 4 : "d"};
const obj3 = { 5 : "e" , 6 : "f"};

const ans = {obj1 , obj2};
console.log(ans);                     // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


const ans2 = Object.assign({},obj1,obj2,obj3);
console.log(ans2);                    // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


const ans3 = { ...obj1, ...obj2, ...obj3};
console.log(ans3);                    // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// Objects inside an Array

const usersInfo = [
    {
        id : 1,
        email : "a@gamil.com"
    },
    {
        id : 2,
        email : "b@gamil.com"
    },
    {
        id : 3,
        email : "c@gamil.com"
    },

]

console.log(usersInfo[1].email);        // b@gamil.com

console.log(Object.keys(usersInfo));    // [ '0', '1', '2' ]

console.log(Object.values(usersInfo));
/* 
[
  { id: 1, email: 'a@gamil.com' },
  { id: 2, email: 'b@gamil.com' },
  { id: 3, email: 'c@gamil.com' }
]
*/

console.log(Object.entries(usersInfo)); 
/*
[
  [ '0', { id: 1, email: 'a@gamil.com' } ],
  [ '1', { id: 2, email: 'b@gamil.com' } ],
  [ '2', { id: 3, email: 'c@gamil.com' } ]
]
*/



//-----------------------------------------  Object Destructuring  ------------------------------------------------

const course = {
    courseNAme : "JS Tutorial",
    price : "$ 999",
    courseInstuctor : "Dolphin"
}

// console.log(course.courseInstuctor);     // Dolphin

/* [ Destructuring ]

const {courseInstuctor} = course;
console.log(courseInstuctor);           // Dolphin

*/

// [ Destructuring and giving random name to Objects element ]

const {courseInstuctor : instructor} = course;
console.log(instructor);                // Dolphin


//-----  JSON  -----

// Structure of JSON [JavaScript Object Notation]
/*

{
    courseNAme : "JS Tutorial",
    price : "$ 999",
    courseInstuctor : "Dolphin"
}

*/


// Structure of JSON in Array
/*
[
    {},
    {},
    {}
]
*/

