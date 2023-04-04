import React from "react";
import { useNavigate } from "react-router-dom";

function Carousel(props)
{
    const navigate = useNavigate();
    let category0 = props.products[0].category;
    category0 = category0[0].toUpperCase() + category0.substring(1);
    let category1 = props.products[1].category;
    category1 = category1[0].toUpperCase() + category1.substring(1);
    let category2 = props.products[2].category;
    category2 = category2[0].toUpperCase() + category2.substring(1);
    function handleClick(event){
        let num = parseInt(event.target.name);
        if(Number.isInteger(num))
        {
            let returnArray = [
                props.products[num].image,
                props.products[num].title,
                props.products[num].description,
                props.products[num].price,
                props.products[num].category,
                props.products[num].id,
                0]
            console.log(returnArray);
            props.passProps(returnArray)
            navigate("/view");
        }
    }
    return(
            <div id="carousel-items" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
    <div className="carousel-inner">
        <div name="0" className="carousel-item active">
            <div name="0" className="container-fluid">
                <div name="0" onClick={handleClick} className="row carousel-row">
                    <div name="0" className="col-sm-6 carousel-picture">
                        <img name="0" src={props.products[0].image} className="d-block w-100 carousel-img hover-img" alt="..."></img>
                    </div>
                        <div name="0" className="col-sm-6 carousel-desc">
                            <h2 name="0">{props.products[0].title}</h2>
                            <div name="0" className="price-break-100"></div>
                            <p name="0">{category0}</p>
                            <p className="carousel-details" name="0">{props.products[0].description}</p>
                            <p name="0" className="price">${props.products[0].price}</p>
                            
                        </div>
                </div>
            </div>
        </div>
        <div name="1"  className="carousel-item">
            <div name="1" className="container-fluid">
                <div name="1" onClick={handleClick} className="row">
                    <div name="1"className="col-sm-6 carousel-picture">
                        <img name="1" src={props.products[1].image} className="d-block w-100 carousel-img hover-img" alt="..."></img>
                    </div>
                        <div name="1"className="col-sm-6 carousel-desc">
                            <h2 name="1">{props.products[1].title}</h2>
                            <div name="1" className="price-break-100"></div>
                            <p name="1">{category1}</p>
                            <p name="1" className="carousel-details">{props.products[1].description}</p>
                            <p name="1" className="price">${props.products[1].price}</p>
                        </div>
                </div>
            </div>
        </div>
        <div name="2" className="carousel-item">
            <div name="2" className="container-fluid">
                <div name="2" onClick={handleClick} className="row">
                    <div name="2" className="col-sm-6 carousel-picture">
                        <img name="2" src={props.products[2].image} className="d-block w-100 carousel-img hover-img" alt="..."></img>
                    </div>
                        <div name="2" className="col-sm-6 carousel-desc">
                            <h2 name="2">{props.products[2].title}</h2>
                            <div name="2" className="price-break-100"></div>
                            <p name="2">{category2}</p>
                            <p name="2" className="carousel-details">{props.products[2].description}</p>
                            <p className="price" name="2">${props.products[2].price}</p>
                            
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div className="controls">
    <button className="carousel-control-prev" type="button" data-bs-target="#carousel-items" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carousel-items" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
    </div>)
    
}

export default Carousel;