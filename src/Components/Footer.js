import React from "react";


function Footer() {
    const hour = new Date().getHours();
    
    console.log(hour);
    if(hour>=22||hour<=10){
        return(
            <p className="order">
            Closed

            </p>
        )
    }
    
    return (
        <div>
        
        <center> <footer className="footer">{ hour ? (
            <div className="order">
            <p>We are Open  </p>
            <button className="btn" 
            >Order</button>
            </div>
            ):(<p>we are happy to welcome you between 10:00am to 10:00pm </p>)} </footer>
            </center>
        </div>
    )
}

export default Footer
