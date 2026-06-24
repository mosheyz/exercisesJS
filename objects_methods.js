// 1
const key = (obj) => Object.keys(obj);
console.log(key({name: "AlIcE", age: 24}))

// 2
const value = (obj) => Object.values(obj)
console.log(value({name: "AlIcE", age: 24}))

// 3
function allObj (obj) {
    for (const [k, v] of Object.entries(obj)) {
        console.log(k, ":", v)
    }
}

allObj({name: "AlIcE", age: 24})

// 4
const grades = { math: 80, english: 90, science: 70 }

function average (grades) {
    const nums = Object.values(grades);
    const sum = nums.reduce((acc, current) => acc + current, 0);
        return sum / nums.length
}

console.log(average(grades))

// 5
const joined = (a, b) = Object.assign(a, b);
console.log(joined({name:"moshe"}, {age:24}));

// 6
const defa = { theme: "light", lang: "en" }
const settings = { lang: "he" }

function joined(a, b) {
    return Object.assign(a, b)
}
console.log(joined(defa, settings))

// 7
const has = (obj, key) => Object.hasOwn(obj, key);
console.log(has({name:"moshe", age:24}, "name"));

// 8
const config = Object.freeze({name:"moshe", age:24}); 
Object.assign(config, {city: "PT"});
console.log(config);

// 9
const myArray = [["name", "Alice"], ["age", 25]];
const toObject = (arr) => Object.fromEntries(arr);
console.log(toObject(myArray))

// 10
const item = { apple: 10, banana: 5, mango: 20 }
const tenOff = (obj) => Object.fromEntries(
    Object.entries(obj).map(item => [item[0], item[1] * 0.9]))
console.log(tenOff(item))

// 11
function isNumbers (obj) {
    const list = Object.entries(obj)
    .filter (item => typeof item[1] === "number");
    return Object.fromEntries(list)
}
console.log(isNumbers({name:"moshe", age:2, city:"pt", children:6}))

// 12
const user = {name:"moshe", age:24};
const copyObj = (obj) => ({...obj});
const copy = copyObj(user);
copy.name = "hanan";
console.log(user);
console.log(copy);

// 13
function sameObject (a, b) {
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    if (keysA.length != keysB.length) {
        return false
    } for (const k of keysA) {
        if (!keysB.includes(k)) {
            return false
        }
    } return true
}
console.log(sameObject({name:"moshe", age:24}, {name:"moshe", age:24}))

