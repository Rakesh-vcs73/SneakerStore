import React from "react"

export default function Test(){
    const date=new Date()
    const hours=date.getHours()

    let timeofDay

    if(hours<12){
        timeofDay ="morning"
    }else if(hours>=12 && hours<17){
        timeofDay="afternoon"
    }else{
        timeofDay="night"
    }
    return(
        <div>
            <h1>Hello</h1>
            <h1>Good {timeofDay} !</h1>
            <h1>Time is {hours}</h1>
        </div>
    )
}