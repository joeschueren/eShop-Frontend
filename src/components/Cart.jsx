import React from "react";
import {useNavigate} from "react-router-dom";
import CartItem from "./CartItem";



function Cart(props){

    const navigate = useNavigate()
    console.log(JSON.parse(localStorage.getItem("cart")));
    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    const componentsArray = [];

    function handleClick(){
        props.clearCart();
        console.log(localStorage.getItem("cart"));
        window.location.reload();

    }

    if(cart !== null)
    {
        for(let i=0; i<cart.length; i++){
            componentsArray.push(<CartItem 
                key={i} 
                id={cart[i].id} 
                url={cart[i].url} 
                name={cart[i].name} 
                desc={cart[i].desc}
                price={cart[i].price}
                discount={cart[i].discount}/>)
        }
    }

    return(
        <div>
            <h1 className="cart-title">Your Cart</h1>
            {componentsArray.length === 0 ? <p className="empty-text">Nothing to see here.</p> : componentsArray}
            {componentsArray.length > 0 && (<div className="clear-container">
                <button className="clear-cart-button" onClick={handleClick}>Clear Cart</button>
            </div>)}
            
        </div>
    )
}

export default Cart;