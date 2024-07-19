let welcome = (firstName) => console.log(`welcome ${firstName}!`)

welcome('Chris')

function shop(kitchen = false, qtyFork=0, qtyPlate=0){
    if(kitchen && (qtyFork > 0 || qtyPlate > 0)){
        if(qtyFork>0){
            buyFunction('fork', qtyFork)
        }
        else{
            console.log("You didn't buy any fork")
        }
        if(qtyPlate>0){
            buyFunction('plate', qtyPlate)
        }
        else{
            console.log("You didn't buy any plate")
        }
    }
    else {
        console.log('No shopping today')
    }
}

function buyFunction(product, qty){
    console.log(`How many ${product}s do you want?`)
    for(let i = 1; i<= qty; i++){
        if(i==1){
            console.log(`You bought ${i} ${product}`)
        }
        else{
            console.log(`You bought ${i} ${product}s`)
        }
    }
}

shop(kitchen=false, qtyFork=6, qtyPlate=4)