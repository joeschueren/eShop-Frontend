import React from "react";
import CartItem from "./CartItem";



function Cart(props){
    // gets the user's cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // creates an array to render all the items from cart
    const componentsArray = [];

    //handles the clear cart button
    function handleClick(){
        props.clearCart();
        window.location.reload();

    }

    // checks to see if cart is empty then pushes all the items into the array to be rendered
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

    // renders all the cart items, or if the cart is empty a message to the user along
    //  with a button to empty cart
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