import React from "react";
import Pizza from "./Pizza";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function Menu() {
const pizza = pizzaData;
// const pizza = [];
const numpizza = pizza.length;  //React can render number in website but not true and false value


    return (
        <main className="menu">
            <h2>Our Menu is :-</h2>
{/* <div>
{ pizzaData.map((pizza)=><Pizza name ={ pizza.name}
      ingredients = {pizza.ingredients}
      price = {pizza.price}
      photoName = {pizza.photoName}
      soldOut = {pizza.soldOut}

></Pizza>)}
</div> */}



{/* {
  numpizza > 0 && (<ul className="pizzas">
{ pizza.map((pizza)=><Pizza pizzaobj = {pizza}   //condition rendering using & operator
    key = {pizza.name}
></Pizza>)}
</ul>

)} */}



{numpizza > 0 ?
 (
  <React.Fragment>
  
  <ul className="pizzas">
{ pizza.map((pizza)=><Pizza pizzaobj = {pizza}   //condition rendering using  ternary operator
    key = {pizza.name}
></Pizza>)}
</ul>
</React.Fragment>
): (<p> orders are loading </p>)}

            {/* <Pizza name = "Pizza Spinachi"
            ingredients = "Tomato , mozarella ,spinach ,ricotta cheese"
            price = {10}  //Number have to pass like this
            photoName = "pizzas\spinaci.jpg"
            ></Pizza>


            <Pizza name = "Pizza Funghi"
            ingredients = "Tomato, mozarella, mushrooms, and onion"
            price = {12}
            photoName = "pizzas\funghi.jpg"
            ></Pizza> */}
            
        </main>
    )
}

export default Menu
