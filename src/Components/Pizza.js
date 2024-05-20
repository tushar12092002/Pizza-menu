import React from "react";

function Pizza({pizzaobj}) {  //Destructring-Props

    console.log(pizzaobj);
    // if(pizzaobj.soldOut){
    //     return null;
    // }
    return (
        <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaobj.photoName}  alt="spinachi-pizza"></img>
            <h3>{pizzaobj.name}</h3>
            <p>{pizzaobj.ingredients}</p>
            <span>{pizzaobj.soldOut?"sold-out": pizzaobj.price}</span>

        </li>
    )
}

export default Pizza
