import React from "react";
import {useNavigate} from "react-router-dom";




function Itembox(props)
{
    const navigate = useNavigate();

    let category = props.category;
    category = category[0].toUpperCase() + category.substring(1);

    let desc = props.desc;
    if(props.desc.length > 70){
        desc = props.desc.substring(0,69) + "...";
    }
    let name = props.name;
    if(props.name.length > 30)
    {
        name = props.name.substring(0,29) +  "...";
    }

    function handleClick() {
    console.log("Clicked");
      let returnArray = [props.url, props.name, props.desc, props.price, props.category, props.id, .0];
      props.passProps(returnArray);
        navigate("/view");
    }
    return <div className="col col-lg-4 col-md-6 col-sm-12 item-container">
        <a onClick={handleClick} className="anchor-box">
            <div className="itembox">
                <div className="img-container">
                    <img src={props.url} className="item-img"></img>
                </div>
                <div className="item-info">
                    <h2>{name}</h2>
                    <p>{category}</p>
                    <p className="description">{desc}</p>
                    <p className="col price">${props.price}</p>
                <div className="item-animation">
                </div>
            </div>
            </div>
        </a>
    </div>
        
    
}

export default Itembox;