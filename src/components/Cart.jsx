import React, {useState} from "react";
import CartItem from "./CartItem";



function Cart(props){
    // gets the user's cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let price = 0;

    // creates an array to render all the items from cart
    const componentsArray = [];

    //handles the clear cart button
    function handleClick(){
        props.clearCart();
        window.location.reload();
        

    }

    const [warning, setWarning] = useState("");

    // warns the user when they try to purchase that they are unable, then reset after 5 seconds
    function handleWarning(){
        setWarning("Unable to purchase item, this site is for demonstration purposes only.");
        setTimeout(() => setWarning(""), 5000)
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
            price += cart[i].price
        }
    }

    // renders all the cart items, or if the cart is empty a message to the user along
    //  with a button to empty cart
    return(
        <div>
            <div classNAme="container-fluid">
            <h1 className="cart-title">Your Cart</h1>
            <div className="row row-whole">
                <div className="col-lg-8">
                    {componentsArray.length === 0 ? <div className="empty-div"><p className="empty-text">Nothing to see here.</p><a className="empty-anchor" href="/">Start Shopping</a></div> : componentsArray}
                </div>
                <div className="col-lg-4">
                    <div className="price-details">
                                <h2 className="price-heading">Price Details</h2>
                                <div className="container-fluid">
                                <div className="row price-break"></div>
                                    <div className="row price-row">
                                        <div className="col-sm-6">Price:</div>

                                        <div className="col-sm-6">$ {price}</div>
                                    </div>
                                    <div className="row price-row">
                                        <div className="col-sm-6">Shipping Fee: </div>
                                        <div className="col-sm-6 promotion">Free</div>
                                    </div>
                                    <div className="row price-break"></div>
                                    <div className="row price-row">
                                            <div className="col-sm-6">Total Amount:</div>
                                            <div className="col-sm-6">${price}</div>
                                    </div>
                                    <div className="row promotion one-line">
                                        <div className="col-sm-12">
                                            You will save ${price*.05 >= 50 ? 50 : Math.round(price*.05)*100 /100} on this order with free shipping.
                                        </div>
                                    </div>
                                    <div className="row price-break"></div>
                                    <div className="row">
                                        {cart.length < 1 ? <div></div> :
                                        (<div><button className="cart-button purchase-button" onClick={handleWarning}>Purchase</button>
                                        <p className="warning">{warning}</p></div>)}
                                    </div>

                                </div>
                            
                        </div>

                </div>

            </div>
            {componentsArray.length > 0 && (<div className="clear-container">
            
                <button className="clear-cart-button" onClick={handleClick}>Clear Cart</button>
            </div>)}
            </div>
            
        </div>
    )
}

export default Cart;