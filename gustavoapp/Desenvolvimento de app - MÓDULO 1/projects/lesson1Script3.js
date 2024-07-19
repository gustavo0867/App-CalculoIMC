var myName = 'Ferreira'
var year = 2023
var birthDate = 2003
var admin = true 
var soccer = true 
var volley = false

if (admin == true){
    console.log(`Hi ${myName}! We are in the year ${year}`)
    console.log(`This year you gonna make ${year - birthDate}`)

    if (soccer == true){
        console.log('You like soccer!')
    }
    if (volley == true){
        console.log('You like volley!')
    }
}
else {
    console.log(`Sorry ${myName} you are not admin`)
}