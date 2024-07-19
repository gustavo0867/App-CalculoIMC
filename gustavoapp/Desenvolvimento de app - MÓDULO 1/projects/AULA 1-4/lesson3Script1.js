let admin = false 
let adminTrueMsg = 'You are logged in as an Admin'
let adminFalseMsg = 'You are not logged in as an Admin'

admin ? console.log(adminTrueMsg) : console.log(adminFalseMsg)

if(admin){
    let listMonitorVersion = []
    let version = 1

    while(version <= 7){
        listMonitorVersion.push(version)
        version = version + 1 
    }

    console.log(`Added ${listMonitorVersion.length} monitors to stock`)

    for(let i = 0; i < listMonitorVersion.length; i++){
        if(listMonitorVersion[i] >= 4 ){
            console.log(`Most update monitors: Monitor V${listMonitorVersion[i]}.00`)
        }
        else{
            console.log(`Monitor: Monitor V${listMonitorVersion[i]}.00`)
        }
    }


}   
