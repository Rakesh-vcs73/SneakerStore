/*
Star and image are images
Image
Star icon, rating review
title
cost /person
*/

import React from "react"
import star from "../images/star.png"

//mport pic from "../images/Jordan_1.png"

export default function Card(props){
    console.log(props.img)
    return(
        <div className="div_card">
            <img className="product_img_card" src={require(`../images/${props.img}`)} alt={props.img}/>
            <div className="rating_div">
                <img className="logo_img_card" src={star} alt="star"></img>
                <span><b>{props.rating}</b></span>
                <span className="grey">({props.reviews}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <p className="productName"><b>{props.title}</b></p>
            <p className="rate">{props.price}</p>
        </div>
    )
}