import React from "react"

import imgshoe from "../images/Jordan_1.webp"

export default function ContactTest(){
    return(
        <div className="contacts">
            <div className="contact_card">
                <img src={imgshoe} alt="test"></img>
                <h3>Mr. Wiskenson</h3>
                <div className="info_group">
                    <img alt="phone icon"></img>
                    <p>89719898917</p>
                </div>
                <div className="info_group">
                    <img alt="Email icon"></img>
                    <p>Whisk@gmail.com</p>
                </div>
            </div>
        </div>
    )
}