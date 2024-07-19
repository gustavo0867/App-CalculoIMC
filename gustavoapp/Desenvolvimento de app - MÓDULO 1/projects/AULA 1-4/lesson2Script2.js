let weight = 80
let height = 1.80 
let bmi = weight / (height * height)
let listMsg = [
    'Underweight',
    'Normal',
    'Overweight',
    'Obese',
    'Extremely obese',
]

console.log(`Your weight is ${weight} kg and your height is ${height.toFixed(2)}m`)
console.log(`So your BMI is ${bmi.toFixed(2)}, you status is: `)

if (bmi < 18.50){
    console.log(listMsg[0])
}
else if (bmi >= 18.50 && bmi <= 24.99){
    console.log(listMsg[1])
}
else if(bmi >= 25 && bmi <= 29.99){
    console.log(listMsg[2])
}
else if (bmi >= 30 && bmi <= 34.99){
    console.log(listMsg[3])
}
else {
    console.log(listMsg[4])
}