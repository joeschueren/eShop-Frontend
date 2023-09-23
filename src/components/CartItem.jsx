import React, {useState} from "react";

function CartItem(props)
{
    // Handles the removal of one item from the cart by filtering it out
    function handleClick(){
        const storedValues = JSON.parse(localStorage.getItem("cart"));

        const updatedValues = storedValues.filter(value => !(value.id === props.id));

        localStorage.setItem("cart", JSON.stringify(updatedValues));
        window.location.reload();
    }

    // used to update the warning
    const [warning, setWarning] = useState("");

    // warns the user when they try to purchase that they are unable, then reset after 5 seconds
    function handleWarning(){
        setWarning("Unable to purchase item, this site is for demonstration purposes only.");
        setTimeout(() => setWarning(""), 5000)
    }

    // renders the items from the cart along with price details using bootstrap grid
    return (
        <div>
            <div className="container-fluid item-row">
                <div className="row">
                        <div className="cart-box">
                            <img src={props.url} className="item-img" alt=""></img>
                            <h2>{props.name}</h2>
                            <p>{props.desc}</p>
                            <p className="price">${props.price}</p>
                            <div className="cart-button-container">
                                <button onClick={handleClick} className="cart-button">Remove</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;