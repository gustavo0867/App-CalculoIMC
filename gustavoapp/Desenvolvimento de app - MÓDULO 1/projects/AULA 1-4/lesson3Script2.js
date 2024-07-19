let list = []

for (let i = 0; i < 10; i++){
    let randomNumber = Math.floor(Math.random()*10)+1
    list.push(randomNumber)
}

let even = []
let odd = []
let primeNumbers = []

for (let i = 0; i<list.length; i++){
    let currentNumber = list[i]
    currentNumber % 2 == 0? even.push(currentNumber) : odd.push(currentNumber)

    if(currentNumber >= 2){
        let isPrime = true
        for (let i=2; i < currentNumber; i++){
            if(currentNumber % i == 0){
                isPrime = false
                break
            }
        }
        if (isPrime){
            primeNumbers.push(currentNumber)
        }

    }
}

console.log(`Full list`)
console.log(list)
console.log(`Only even numbers from list:`)
console.log(even)
console.log(`Only odd numbers from list:`)
console.log(odd)
console.log(`Only prime numbers from list:`)
console.log(primeNumbers)