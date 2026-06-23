// 1
const arr =[1, 2, 3, 4, 5];
const newArr = arr.map(num => num * 2)
console.log(newArr)

// 2
const words = ["hello", "world"]
words.map ((word, index) => words[index] = word.toUpperCase() )
console.log(words)

// 3
const prices = [1, 2, 3, 4, 5]
prices.map( (price, index) => prices[index] = price * 1.17)
console.log(prices)

// 4
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(num => num % 2 === 0)
console.log(evens)

// 5
const names = ["hi", "hello", "cat", "javascript"]
const longWords = names.filter(name => name.length > 3)
console.log(longWords)

// 8
const prices = [1, 2, 3, 4, 5, 40, 180, 190, 7, 230];
const newPrices = prices.filter(price => price >= 100).map(price => price * 1.1)
console.log(newPrices)

// 10
const nums = [10, 20, 30];
const total = nums.reduce((acc, current) => acc * current, 1)
console.log(total)

// 12
const ages = [2, 7, 18, 60]
const ave = ages.reduce((acc, current) => acc + current, 0) / ages.length
console.log(ave)

// 25
const nums = [2,5,3,6,4,7,8]
console.log(nums.sort((a, b) => b -a))

// 29
const nums = [2,5,3,6,4,7,8]
nums.splice(1, 2)
console.log(nums)

// 32
const matrix = [[1, 2, 3]]
const arr = matrix.flat(1)
console.log(arr)

// 36
const nums = [1,2,3,4,5,6,7,8]
const filterMums = nums.filter(num => num % 2 === 0).map(num => num * 2).reduce((acc, current) => acc + current, 0)
console.log(filterMums)

// 38
const kelet = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }];

const unionKelet = kelet.reduce((acc, current) => {
    if (acc[current.type]) {
        acc[current.type] += 1
        } else {
            acc[current.type] = 1
        } return acc
    }, {})

console.log(unionKelet)

// 39
const items = [1,2,"a",3,4,"b","a",5,6,7,8]

for (let i = 0; i < items.length; i ++) {
    if (items.includes(items[i], i+1)) {
        console.log("duplicate true")
        break
    }
}

// 41
const products = [
  { name: "Laptop", price: 800, inStock: true,  category: "tech"    },
  { name: "Phone",  price: 400, inStock: false, category: "tech"    },
  { name: "Shirt",  price: 50,  inStock: true,  category: "fashion" }
];

const shortedProducts = products
.filter(product => product.inStock && product.price >= 100)
.sort((a, b) => a.price - b.price)
.reduce((acc, current) => acc + current.name, "")

console.log([shortedProducts])
