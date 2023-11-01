import React from "react"

import shoeimage from "../images/shoes.jpg"

export default function Static(){
    return(
        <section className="sec_static">
            <img className="img_static" src={shoeimage} alt="shoe"></img>
            <h1 className="h1_static"> Air Online</h1>
            <p className="p_static"> Exclusive collection of Air Jordans</p>
        </section>
    )
}