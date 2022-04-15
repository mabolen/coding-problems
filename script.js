//1
const ages = [3, 9, 23, 64, 2, 8, 28, 93]
//a
console.log(ages[ages.length - 1] - ages[0])
//b
function addAge(age) {
    ages[ages.length] = age
}

addAge(13)
//c
let sumOfAges = 0

for(let i = 0; i < ages.length; i++) {
    sumOfAges += ages[i]
}

console.log(sumOfAges / ages.length)

//2

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//a
let sumOfNames = 0

for (const element of names) {
    sumOfNames += element.length
}

console.log(sumOfNames / names.length)
//b
let nameString = ''

for (const element of names) {
    nameString += element + ' '
}

console.log(nameString)

// I would just do this but it says I need to use a loop
console.log(names.join(' '))

//3. array[array.length - 1]  Use the name of the array and access the last index with .length - 1 (since arrays start at 0 index)

//4 array[0] Arrays begin at index of 0

//5 
let namesLengths = []

for (let i = 0; i < names.length; i++) {
    namesLengths.push(names[i].length)
}

console.log(namesLengths)

//6
let i = 0
let namesSum = 0

while (i < namesLengths.length) {
    namesSum += namesLengths[i]
    i++
}

console.log(namesSum)

//7
const wordCat = (word, n) => {
    let result = ''
    while (n > 0) {
        result += word
        n--
    }
    return result
}

console.log(wordCat('Hello', 3))

//8
const namer = (firstName, lastName) => {
    return firstName + ' ' + lastName
}

console.log(namer('Marshall', 'Bolen'))

//9
const isGreater = (arr) => {
    let result = 0
    for (const element of arr) {
        result += element
    }
    return result > 100
}

console.log(isGreater([12, 44, 66]))

//10
const averager = (arr) => {
    let sum = 0
    for (const element of arr) {
        sum += element
    }
    return sum / arr.length
}

console.log(averager([1, 2, 3, 4, 5]))

//11
const doubleAverager = (arr1, arr2) => {
    let sum1 = 0
    let sum2 = 0
    for (const element of arr1) {
        sum1 += element
    }
    for (const element of arr2) {
        sum2 += element
    }
    return (sum1 / arr1.length > sum2 / arr2.length)
}

console.log(doubleAverager([44, 2, 3, 4], [2, 3]))

//12
const willBuyDrink = (isHotOutside, moneyInPocket) => {
    return isHotOutside && moneyInPocket > 10.50
}

console.log(willBuyDrink(true, 22))

//13
/* this function solves the problem of boredom. It can also represent a coin flip to make decisions.
this function is triggered when the html button is clicked
it generates a random number up to 100 and updates the result element with the roll and either a win or lose message */
const roller = () => {
    let currentNum = Math.floor(Math.random() * 100)
    let target = document.getElementById('result')
    const win = 'You win!', lose = 'You lose!'
    return currentNum >= 50 ? target.innerText = `You rolled: ${currentNum}. ${win}` : target.innerText = `You rolled: ${currentNum}. ${lose}`
}