import React, {useEffect, useState} from "react";
import Header from "./Header";
import Register from "./Register";
import Login from "./Login";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import SingleItem from "./SingleItem";


function App()
{
    // Sets up a hook to keep track of the items received from the get request
    const [data, setData] = useState(undefined);

    // Checks to see if users cart is empty then fills it with an empty array to avoid errors
    if(JSON.parse(localStorage.getItem("cart")) === null){
        localStorage.setItem("cart", JSON.stringify([]))
    }

    // Makes a get request to the backend to get items to display
    useEffect(function(){
        fetch("http://192.168.0.238:5000/inventory")
        .then((response) => response.json())
        .then((data) => {setData(data);
        sessionStorage.setItem("products", JSON.stringify(data));})
        .catch((error) => console.error(error));
    }, []);
    

    // Gets either the current cart or sets to an empty array to fill in the new item being added
    let cartInfo = JSON.parse(localStorage.getItem("cart")) || [];

    // Callback function being sent down when rendering an item being viewed to be able to add to cart
    function addCart(item){
            let info = JSON.parse(localStorage.getItem("cart")) || [];
            info.push(item);
            localStorage.setItem("cart", JSON.stringify(info));
    }

    // Callback sent to the cart route to be able to clear the cart entirely
    function removeCart(){
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify([]));
    }

    // Sets up a hook to keep track of what the user wants to view
    const [viewing, setViewing] = useState([undefined])

    // Callback to bring back the info of what the user wants to view and send it to the view route
    const passProps = function(item){
        setViewing(item);
    };
        // Router set up to handle all the routes that the page supports
        return(
        
            <Router>
            <div>
            <Header info={cartInfo}>
            </Header>
            {/* Dynamically renders the page if the get request has finished or a loading screen*/}
            {typeof data === "undefined" ? <h1 className="loading"> Loading...</h1> :
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home products={data} passProps={passProps}/>}/>
                <Route path="/:number" element={<Home products={data} passProps={passProps}/>}/>
                <Route path="/cart" element={<Cart clearCart={removeCart}/>}/>
                <Route path="/view" element= {<SingleItem details={viewing} addCart={addCart}/>}/>
            </Routes>}    
            </div>
            </Router>)
    
}
export default App;