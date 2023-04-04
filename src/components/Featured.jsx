import React from "react";
import {useNavigate} from "react-router-dom";

function Featured(props)
{
    // Sets up navigation to route to view on click along with corrects capitalization of category
    const navigate = useNavigate()
    let category = props.products.category;
    category = category[0].toUpperCase() + category.substring(1);

    // Limits the length of name and description to fit on the page
    let desc = props.products.description;
    if(desc.length > 55){
        desc = props.products.description.substring(0,59) + "...";
    }
    let name = props.products.title;
    if(name.length > 25)
    {
        name = props.products.title.substring(0,24) +  "...";
    }

    // Uses callback function to tell the view page what was clicked and what to render
    function handleClick()
    {
        let returnArray = [props.products.image, props.products.title, props.products.title, props.products.price, props.products.category, props.products.id, props.discount];
        props.passProps(returnArray);
        navigate("/view");
    }
    // calculates the prices of deals after the discounts
    let finalPrice = props.products.price * (1 - props.discount)
    category[0].toUpperCase();
    // renders a featured item using bootstrap grid and info from fake store api
    return (
        <div className="col-lg-6 col-md-12">
            <div onClick={handleClick}className="anchor-box featured-box">
                <div className="itembox featured-box">
                    <img src={props.products.image} className="featured-img" alt=""></img>
                    <div className="item-info">
                        <h2>{name}</h2>
                        <p>{category}</p>
                        <p>{desc}</p>
                        <p className="original-price">${props.products.price}</p>
                        <p>Now Just <b>${Math.round(finalPrice.toFixed(2))}</b></p>
                        <p className="discount"> <b>%{props.discount * 100}   Savings!</b></p>
                        <div className="item-animation"></div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Featured;