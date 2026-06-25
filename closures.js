// 1
function createLogger() {
    return function () {
        console.log("hello")
    }
}
const log = createLogger()
log()

// 2
function createGreeting(name) {
    return function (name) {
        console.log(`hello ${name}`)
    }
}
const greet = createGreeting()
greet("moshe")

// 3
function createCounter() {
    let counter = 0
    return function () {
        counter ++
        return counter
    }
}
const increment = createCounter()
increment()
console.log(increment())


// 4
function outer() {
  let x = 10;
  return function () {
    console.log(x);
  };
}

const fn = outer();
fn();
// 10. כי הפונקציה רואה מה שבתוך הסביבה שלה.

// 5
function createMultiplier(x) {
    return function(n) {
        return n * x
    }
}
const double = createMultiplier(2);
console.log(double(5))

// 6
function createAdder(x) {
    return function(y) {
        return y + x
    }
}
const add5 = createAdder(5);
console.log(add5(3)); 

// 7
function createSecret (x) {
    let secret = x
    function getSecret () {
        return secret
    } function setSecret (n) {
        secret = n
        return secret
    } return {getSecret, setSecret}
}
const {getSecret, setSecret} = createSecret(5)
console.log(setSecret(3))

// 8
function once(fn) {
    let counter = 1
    return function() {
        if (counter) {
        fn()
        counter --
    }
}
}
const fn = once(log)
fn()
fn()
fn()

// 12
function createStack () {
    const array = [1, 2, 3, 4, 5]
    
    function push(n) {
        array.push(n)
    } function pop () {
        let n = array.pop()
        return n
    } function peek () {
        let n = array.splice (-1, 0)
        return n
    } return {push, pop, peek}
    
}
const stack = createStack()
console.log(stack.peek())

// 13
function createIdGenerator() {
    let counter = 0
    return function () {
        counter ++
        return counter
    }
}
const gen = createIdGenerator()
gen()
console.log(gen())

// 15
function createBankAccount(initialBalance) {
    let balance = 0
    
    function deposit(amount) {
        balance += amount
    } function withdraw(amount) {
        if (amount > balance) {
            console.log("you dont have much money"
            )
            return false
        }
        balance -= amount
    } function getBalance() {
        console.log(balance)
    } return {deposit, withdraw, getBalance}
}

const account = createBankAccount()
account.deposit(50)
account.withdraw(20)
account.getBalance()
