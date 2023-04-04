import React from "react";
import {useNavigate} from "react-router-dom";

function Featured(props)
{
    const navigate = useNavigate()
    let category = props.products.category;
    category = category[0].toUpperCase() + category.substring(1);

    let desc = props.products.description;
    if(desc.length > 60){
        desc = props.products.description.substring(0,59) + "...";
    }
    let name = props.products.title;
    if(name.length > 25)
    {
        name = props.products.title.substring(0,24) +  "...";
    }

    function handleClick()
    {
        let returnArray = [props.products.image, props.products.title, props.products.title, props.products.price, props.products.category, props.products.id, props.discount];
        props.passProps(returnArray);
        navigate("/view");
    }
    let finalPrice = props.products.price * (1 - props.discount)
    category[0].toUpperCase();
    return (
        <div className="col-lg-6 col-md-12">
            <a onClick={handleClick}className="anchor-box featured-box">
                <div className="itembox featured-box">
                    <img src={props.products.image} className="featured-img"></img>
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
            </a>
        </div>)
}

export default Featured;