// this is decleration of variable a 
var a;
//  inisatlization the value to a 
a = "buhari";
//   reassign the value of a 
a = "basith";
console.log(a);
//  redecleration of variable 
var a = "burhan";
console.log(a);
//  in var we can reassigning the value and redecleration the variable

// <!-- this is decleration of variable z
let z;
//  inisatlization the value to z 
z = "buhari"
console.log(z);
//  reassign the value of z -->
z = "lisa";
console.log(z);
//  creating new variable -->
let y = "rose";
console.log(y);
//  in let we can reassign but we cant redecleration  -->


//  this is decleration and inisalization the value -->
const w = "answer";
console.log(w);
//  we cant reassign and redecleration the value -->
const m = "good";
console.log(m);

//  types of operators -->
//   1. assignment operator -->
let x = 5;
x = 10;
console.log(x);
//    2. arithmetic operator -->
let num1 = 2;
let num2 = 4;
let res = num1 + num2;
console.log(res);
//     3. comparison operator -->
let int = 6;
let b = 5;
let c = int < b;
console.log(c);

// equal to -->
let num3 = 5;
let num4 = 6;
let res1 = num3 == num4;
console.log(res1);
// not equal to -->
let num5 = 5;
let num6 = 7;
let res4 = num5 != num6;
console.log(res4);

// data type 
// <!-- string
// number
// bigint
// boolean
// symbol
// object
// null
// undefined -->

// <!-- string -->
//  <!-- we can define a value in "" or''  -->
var a = "burhan";
a = 'basith';

console.log(a.length);
a = "23";
a= String(525);
console.log(typeof (a));

// number the value can be in integer,float or decimal
var num = 23;
num=24.6;
num=Number("john");
console.log(typeof (num));
// boolean the value is neither true or false
var boolean=true;
boolean=false;
console.log(typeof(boolean));

// null vs undefined
// undefined, a variable without a value, has the value undefined. The type is also undefined
var car;
console.log(typeof(car));
// null, a variable with value ,has the value is null,the type is object
var bike=null;
console.log(bike);

// array is enclosed with []
// index start from zero
// it can have any type of value
// typeof array object

var classroom;
classroom=["student",10,"teacher","basith"]
console.log(typeof(classroom[2]))
console.log(classroom.length);
console.log(classroom[2]);