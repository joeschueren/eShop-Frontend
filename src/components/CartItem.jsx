import React, {useState} from "react";

function CartItem(props)
{
    function handleClick(){
        const storedValues = JSON.parse(localStorage.getItem("cart"));
        
        console.log("stored: ", storedValues)

        const updatedValues = storedValues.filter(value => !(value.id === props.id));

        console.log(updatedValues)

        localStorage.setItem("cart", JSON.stringify(updatedValues));
        console.log(JSON.parse(localStorage.getItem("cart")));
        window.location.reload();
    }

    const [warning, setWarning] = useState("");

    function handleWarning(){
        setWarning("Unable to purchase item, this site is for demonstration purposes only.");
        setTimeout(() => setWarning(""), 5000)
    }
    return (
        <div>
            <div className="container-fluid item-row">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="cart-box">
                            <img src={props.url} className="item-img"></img>
                            <h2>{props.name}</h2>
                            <p>{props.desc}</p>
                            <p className="price">${props.price}</p>
                            <div className="cart-button-container">
                                <button onClick={handleClick} className="cart-button">Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="price-details">
                            <div>
                                <h2 className="price-heading">Price Details</h2>
                                <div className="container-fluid">
                                <div className="row price-break"></div>
                                    <div className="row price-row">
                                        <div className="col-sm-6">Price: </div>

                                        <div className="col-sm-6">${props.price}</div>
                                    </div>
                                    <div className="row price-row">
                                        <div className="col-sm-6">Shipping Fee: </div>
                                        <div className="col-sm-6 promotion">Free</div>
                                    </div>
                                    <div>
                                        <div className="row price-row">
                                            <div className="col-sm-6">Discount:</div>
                                            <div className="col-sm-6 promotion">{props.discount*100}%</div>
                                        </div>
                                    </div>
                                    <div className="row price-break"></div>
                                    <div className="row price-row">
                                            <div className="col-sm-6">Total Amount:</div>
                                            <div className="col-sm-6">${(props.price - (props.price * props.discount)).toFixed(2)}</div>
                                    </div>
                                    <div className="row promotion one-line">
                                        <div className="col-sm-12">
                                            You will save ${(props.price * props.discount).toFixed(2)} on this order
                                        </div>
                                    </div>
                                    <div className="row price-break"></div>
                                    <div className="row">
                                        <button className="cart-button purchase-button" onClick={handleWarning}>Purchase</button>
                                        <p className="warning">{warning}</p>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;