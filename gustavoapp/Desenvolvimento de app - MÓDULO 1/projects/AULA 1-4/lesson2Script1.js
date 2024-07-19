let purchaseList = ['apple', 'banana', 'orange']
let myName = 'França'
const purchase = false 
    
if(purchase==true){
    console.log('Purchase made!')
    console.log(`Thank you very much for the purchase ${myName}`)
    console.log(`You bough: ${purchaseList[0]}, ${purchaseList[1]} and ${purchaseList[2]}`)
    
    if(purchaseList.length > 2){
        console.log('You purchase more than two itens')
        console.log('With our special offer of the day, get a watermelon for free!')
    }
    else{
        console.log('Today unfortunately you not win a offer')
    }
}
else {
    console.log('Purchase not made')
}
