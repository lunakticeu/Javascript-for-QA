console.log('Hello, Javascript')

var name = 'Master Yoda'
var age = 100
var jedi = true

// Math Operators //

var n1 = 5
var n2 = 5
var n3 = '6'

console.log(typeof n2)
console.log(typeof n3)

var conversion = n1 + parseInt(n3)
console.log(conversion)

var add = n1 + n2
var minus = n1 - n2
var divide = n1 / n2
var multiply = n1 * n2
console.log(add)
console.log(minus)
console.log(divide)
console.log(multiply)

//Comparing Operators //

var v1 = 5
var v2 = 5
var v3 = '5'

var result = v1 === v2
var result2 = v1 == v3
var result3 = v1 != v3
console.log(result)
console.log(result2)
console.log(result3)

// Fuctions //

function sum (n1,n2) {
    console.log(n1+n2)
}
sum(2, 4)

function sum2 (n1, n2) {
    return n1 + n2
}
var final = sum2(6, 7)
console.log(final)

function welcome() {
    alert('Welcome!')
}

welcome()

// Control flows //

var funds = 1000

function saque(value) {

    if (value > funds) {
        console.log('Insufficient funds')
    }
    else if (value > 700){
        console.log('Amount requested exceed the daily limit')
    }
    else {
        funds = funds - value
    }
}
saque(701)
console.log(funds)

// Arrays //

var storage = ['chips', 'rice', 'water','candy']

console.log(typeof storage)

storage.push('cherries')
console.log(storage)

storage.pop()
console.log(storage)

storage = storage.filter(function(s){
    return s !== 'rice'
})

console.log(storage)

// Loops //

var animals = ['Cat', 'Dog', 'Fish', 'Bird']

animals.forEach(function(a){
    console.log(a)
})

for (var i in animals){
    console.log(animals[i])
}

// Objects //

var yoda = {
    name: 'Mester Yoda',
    age:100,
    jedi: true,
    showAge: function() {
        console.log('$(this.name) has $(this.age) years')
    }
}

console.log(yoda)
yoda.showAge()















































