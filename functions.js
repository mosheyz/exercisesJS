// 1
function great(name) {
    console.log(`hello ${name}`)
}

great("moshe")

// 2
const sum =(a, b) => a+b ;

console.log(sum(2, 3))

// 3
const is_even = (num) => num % 2 === 0;

console.log(is_even(3))

// 4
function first_item(itams) {
    return itams[0]
}

console.log(first_item([1,2,3]))

// 5
function upper(word) {
    return word.toUpperCase()
}

console.log(upper("moshe"))

// 6
let x = 5;

function test() {
  let x = 10;
  console.log(x);
}

test();
console.log(x);

// מדפיס 10 ואז 5, קודם מה שבפונקציה ואז המשתנה הגלובלי

// 7
function test() {
  const y = 10;
}

test();
console.log(y);

// לא מגדירים משתנה גלובלי בתוך פונקציות.

// 8
let x = 1;

function a() {
  console.log(x);
}

function b() {
  let x = 2;
  a();
}

b();
// ידפיס 1, כי a בודק מחוץ לפונקציה ואין לו גישה ל b

// 9
function a() {
    let x = 10
    return x
}
function b() {
    return x
}

console.log(b())

// 10
function counter() {
let count = 0;
    return function add() {
        return count++;
}}

add = counter()
add()
add()
console.log(add())

// 11
function sum(nums) {
    let total = 0
    for (const num of nums) {
        total += num
    } return total
}

console.log(sum([1,2,3]))

// 12
function square(n) {
    return n ** 2
}

function even_square(num) {
    return square(num) % 2 === 0
}

console.log(even_square(7))

// 13
let x = 10;

function test(x) {
  return x * 2;
}

console.log(test(5));
// 10
// כשקוראים למשתנה בתוך פונקציה המחשב מחפש קודם אם יש לו קריאה בתוך הפונקציה ורק אם לא הוא מחפש בחוץ.

// 14
function even_nums(nums) {
    let even_nums = [];
    for (const num of nums) {
        if (num % 2 === 0) {
            even_nums.push(num)
        }
    } return even_nums
}

console.log(even_nums([1,2,3,4,5,6,7]))

// 15
let total = 0;

function addToTotal(num) {
  total += num;
}

function reset() {
  total = 0;
}

addToTotal(5);
addToTotal(10);
reset();
console.log(total);