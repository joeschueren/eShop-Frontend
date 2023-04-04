import React from "react";
import Itembox from "./Itembox";

function Itemrow(props){
    let itemsArray = [];

    for(let i = 0; i<props.products.length; i++)
    {
        if(props.products[i].length !== 0)
        {
            itemsArray.push(<Itembox
            key={props.products[i].id}
            id={props.products[i].id}
            name={props.products[i].title}
            url={props.products[i].image}
            desc={props.products[i].description}
            price={props.products[i].price}
            category={props.products[i].category}
            passProps={props.passProps}/>)
        }
    }

    return(
    <div className="container-fluid">
        <div className="row">
            {itemsArray}
        </div>
    </div>)
}

export default Itemrow;