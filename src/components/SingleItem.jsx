import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function SingleItem(props){
    // sets up hook to grab info from props
    const [details, setDetails] = useState([]);
    // sets up navigation
    const navigate = useNavigate();

    // checks to see if there is no item to be viewed and redirects to home if so
    useEffect(() => {
        if(props.details[0] !== undefined) {
            setDetails(props.details);
        }
        else{
            navigate("/");
        }
    }, [navigate, props.details]);

    // uses a callback to put the item into the users cart
    function handleClick(){
        let item = {url: details[0],
            name: details[1],
            desc: details[2],
            price: details[3],
            category: details[4],
            id: details[5],
            discount: details[6]};
        props.addCart(item);
        navigate("/");
        window.location.reload();
    }

    // Logic to identify if the item is already in the users cart
    let inCart = JSON.parse(localStorage.getItem("cart")).some((item) => item.id === props.details[5]) || false;
    // Renders the single item and whether or not it can be added to the cart along with a home button
    return(
        <div>
            <div className="container-fluid">
                <div className="row item-row">
                    <div className="col itembox">
                        <div className="row">
                        <div className="col-md-6">
                            <img src={details[0]} className="item-img" alt=""></img>
                            <h2>{details[1]}</h2>
                            <p className="price">${details[3]}</p>
                            <div className="cart-button-container">
                            </div>
                        </div>
                        <div className="col-md-6 view-container">
                        <p>{details[2]}</p>
                            <div className="view-button-container">
                                <a className="view-button-home" href="/"> Return to Home</a>
                                {inCart ? <p className="alert">Already in cart</p> : 
                                <button onClick={handleClick}
                                className="view-button-cart">Add to Cart</button> }
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleItem;