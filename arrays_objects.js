// 1
const numbers = [1,2,3]
console.log(numbers)

// 2
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0])
console.log(fruits[fruits.length-1])

// 3
fruits[1] = "mango"
console.log(fruits)

// 4
console.log(fruits.push("orenge"))
console.log(fruits)

// 5
console.log(fruits.pop())
console.log(fruits)

// 6
fruits.unshift("kiwi")

// 7
fruits.shift()
console.log(fruits)

// 8
const arr = ["a", "b", "c", "d"];
// arr.splice(1, 1)
console.log(arr)

// 9
arr.splice(1, 0, "x")
console.log(arr)

// 10
arr.splice(2, 1, "y")
console.log(arr)

// 11
const numbers = [1,2,3,4,5,6]
console.log(numbers.length, numbers[numbers.length-1])

12
const arr = [1, 2, "a", "b", true, false]
for (const item of arr) {
    console.log(item)
}

// 13
const nums = [10, 20, 30];
for (const num of nums) {
    console.log(num)
}

// 14
const nums = [5, 10, 15]
let total = 0

for (const num of nums) {
    total += num
}
console.log(total)

15
const nums = [3, 8, 12, 1]
for (const num of nums) {
    if (num > 5) {
        console.log(num)
}}

// 16
const person = {
    name: "moshe",
    age: 24
}

console.log(person)

// 17
const person = { name: "Dan", age: 25 };
console.log(person.name, person.age)
console.log(person["name"], person["age"])

// 18
person.city = "kfar chabad"
person.name = "moahe"

console.log(person)

// 19
delete person.age
console.log(person)

console.log("age" in person)

// 20
const student = {
  name: "Yael",
  grades: [90, 80, 100]
};

console.log(student.grades[0])
student.grades.push(95)
student.grades.shift()
console.log(student.grades)

// 21
const product = {
  name: "Laptop",
  price: 3500,
  inStock: true
};
for (const k in product) console.log(`${k}: ${product[k]}`)

// 22
const user = {
  username: "admin",
  role: "manager",
  active: true
};
console.log(Object.keys(user))
console.log(Object.values(user))
for (const k of Object.keys(user)) console.log( k, ":", user[k])

// 23
const order = {
  id: 101,
  customer: {
    name: "Roi",
    address: {
      city: "Tel Aviv",
      zip: "12345"
    }
  }
};

console.log(order.customer.address.city)
order.customer.address.zip = "3456"
order.customer["phone"] = "0543234563"
delete order.customer.address["city"]
console.log(order)