import React from "react";
import {useNavigate} from "react-router-dom";




function Itembox(props)
{
    // set up naviagtion
    const navigate = useNavigate();

    // Fix capitalization of category from fake store api
    let category = props.category;
    category = category[0].toUpperCase() + category.substring(1);

    // Limits the length of name and description to fit on page
    let desc = props.desc;
    if(props.desc.length > 55){
        desc = props.desc.substring(0,54) + "...";
    }
    let name = props.name;
    if(props.name.length > 26)
    {
        name = props.name.substring(0,25) +  "...";
    }

    // Uses a callback to send info to view route to be viewed
    function handleClick() {
      let returnArray = [props.url, props.name, props.desc, props.price, props.category, props.id, .0];
      props.passProps(returnArray);
        navigate("/view");
    }
    // renders on single item box with given info from props
    return <div className="col col-lg-4 col-md-12 col-sm-12 item-container">
        <div onClick={handleClick} className="anchor-box">
            <div className="itembox">
                <div className="img-container">
                    <img src={props.url} className="item-img" alt=""></img>
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
        </div>
    </div>
        
    
}

export default Itembox;