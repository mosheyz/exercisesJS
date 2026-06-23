// 1

const age = 20;
if (age > 18) {
    console.log("adult") 
} else {
    console.log("")
}


// 2

const number = 7;

console.log(number % 2 === 0 ? "even" : "odd")


//3

const isLoggedIn = true;

if (isLoggedIn) {
    console.log("wellcome")
} else {
    console.log("please log in")
}


// 4

let num;
console.log(num > 0 ? "positive num": num == 0 ? "zero" : "negative")


// 5

const a = 10;
const b = 0;

if (a>b) {
    console.log("a is grater than b")
} else if (a === b) {
    console.log("a equal to b")
} else {
    console.log("a is less than b")
}


// 6

const password = "1234";

console.log(
    (password == "1234" ? "allowed" : "denied")
)


// 7

const x = 15;

if (10 < x && x < 20) {
    console.log(`${x} in the range`)
}


// 8

const grade = 83;

if (grade >= 90) {
    console.log("excelent")
} else if (grade >= 75) {
    console.log("good")
} else if (grade >= 60) {
    console.log("pass")
} else {
    console.log("fail")
}


// 9

const temp = 28;

console.log( temp >= 30 ? "very hot" : temp >= 20 ? "nice" : "cold")

// 10

const age = 20;
const hasID = true;

if (age >= 18 && hasID) {
    console.log("allowed")
} else {
    "denied"
}


// 11

const isAdmin = false;
const isManager = true;

console.log(isAdmin || isManager ? "allowed" : "denied")


// 12

const hasCard = false;

if (hasCard) {
    console.log("allowed")
} else {
    console.log("denied")
}


// 13

const name = "";

console.log(name ? name : "guest")


// 14

const arr = [];

console.log( arr.length ? arr : "empty" )


// 15

const x = "5";
const y = 5;

if (x===y) {
    console.log("equal")
} else {
    console.log("not equal")
}


// 16

const username = "admin";
const password = "1234";

console.log(username === "admin" && password == "1234" ? "allowed" : "not allowed")


// 17

const age = 67;

if (age < 18) {
    console.log("teen")
} else if (age >= 65) {
    console.log("gimlai")
} else {
    console.log("no discount")
}

// 18

const day = "mon";

switch (day) {
    case "sat":
    case "fri":
    case "sun":
        console.log("weekend")
        break
    default:
        console.log("midweek")
}


// 19

const total = 250;

console.log( total > 300 ? "free delivery" : total >= 150 ? "20 $ delivery" : "40 $ delivery")


// 20

const role = "editor";

switch (role) {
    case "admin":
        console.log("all")
        break
    case "editor":
        console.log("edit")
        break
    case "viewer":
        console.log("read")
        break
    default:
        console.log("no access")
}


