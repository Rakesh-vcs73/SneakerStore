import React from "react"

import NavBar from "./components/NavBar"
import Static from "./components/Static"
import Card from "./components/Card"
// import Test from "./components/Test"
// import ContactTest from "./components/ContactTest"
/*
Pass img, rateing, review count, country, title, price as props to Card component
*/

export default function App(){
        
    return(
        // <div>
        // <ContactTest/> 
        // <ContactTest/> 
        // <ContactTest/> 
        // <ContactTest/> 
        // </div>
        <div>
        <NavBar />
        <Static />
        <Card img="Jordan_1.png"
              rating={4.1}
              reviews={20}
              country="India"
              title="Air Jordan 1"
              price="7₹"
        />
        <Card img="Jordan_2.png"
              rating={4.2}
              reviews={10}
              country="India"
              title="Air Jordan 2"
              price="8₹"
        />
        <Card img="Jordan_3.png"
              rating={4.3}
              reviews={5}
              country="India"
              title="Air Jordan 3"
              price="9₹"
        />
        <Card img="Jordan_4.png"
              rating={4.4}
              reviews={2}
              country="India"
              title="Air Jordan 4"
              price="10₹"
        />
    </div>
    )
    }