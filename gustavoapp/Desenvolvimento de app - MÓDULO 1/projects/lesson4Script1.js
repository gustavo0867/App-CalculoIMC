const sumFunc = (n1,n2) => n1+n2
const subFunc = (n1,n2) => n1-n2
const multFunc = (n1,n2) => n1*n2
const diviFunc = (n1,n2) => n1/n2

function calcFun(n1,n2, sum, sub, mult, divi){
    if(sum==true){
        console.log(`The sum of ${n1} + ${n2} is equal to ${sumFunc(n1,n2)}`)
    }
    if(sub==true){
        console.log(`The subtcration of ${n1} - ${n2} is equal to ${subFunc(n1,n2)}`)
    }
    if(mult==true){
        console.log(`The multiplication of ${n1} * ${n2} is equal to ${multFunc(n1,n2)}`)
    }
    if(divi==true){
        console.log(`The division of ${n1} / ${n2} is equal to ${diviFunc(n1,n2)}`)
    }
    if(!sum && !sub && !mult && !divi){
        console.log('No one operactions selected')
    }
    else{
        console.log('Operation made!')
    }
}
calcFun(8,2,true,true,true,true)