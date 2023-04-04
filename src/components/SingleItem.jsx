import React, {useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";

function SingleItem(props){
    const [details, setDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(props.details);
        if(props.details[0] !== undefined) {
            setDetails(props.details);
        }
        else{
            navigate("/");
        }
    }, [navigate, props.details]);

    function handleClick(){
        let item = {url: details[0], name: details[1], desc: details[2], price: details[3], category: details[4], id: details[5], discount: details[6]};
        props.addCart(item);
        navigate("/");
        window.location.reload();
    }

    
    console.log(props.details[5]);
    let inCart = JSON.parse(localStorage.getItem("cart")).some((item) => item.id === props.details[5]) || false;
    return(
        <div>
            <div className="container-fluid">
                <div className="row item-row">
                    <div className="col itembox">
                        <div className="row">
                        <div className="col-md-6">
                            <img src={details[0]} className="item-img"></img>
                            <h2>{details[1]}</h2>
                            <p className="price">${details[3]}</p>
                            <div className="cart-button-container">
                            </div>
                        </div>
                        <div className="col-md-6 view-container">
                        <p>{details[2]}</p>
                            <div className="view-button-container">
                                <a className="view-button-home" href="/"> Return to Home</a>
                                {inCart ? <p className="alert">Already in cart</p> : <button onClick={handleClick}
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