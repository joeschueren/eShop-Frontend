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
    const [data, setData] = useState(undefined);

    if(JSON.parse(localStorage.getItem("cart")) === null){
        localStorage.setItem("cart", JSON.stringify([]))
    }

    useEffect(function(){
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }, []);

    let cartInfo = JSON.parse(localStorage.getItem("cart")) || [];
    function addCart(item){
            let info = JSON.parse(localStorage.getItem("cart")) || [];
            info.push(item);
            localStorage.setItem("cart", JSON.stringify(info));
            console.log(JSON.parse(localStorage.getItem("cart")))
    }

    function removeCart(){
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify([]));
    }

    const [viewing, setViewing] = useState([undefined])

    const passProps = function(item){
        setViewing(item);
    };




    console.log("viewing: ", viewing)
        return(
        
            <Router>
            <div>
            <Header info={cartInfo}>
            </Header>
            {typeof data === "undefined" ? <img className="loading" 
            src="https://media3.giphy.com/media/hWZBZjMMuMl7sWe0x8/giphy.gif?cid=ecf05e4747kylviivrvxg5po2snpi9mox3amgeg5anmg8p3p&rid=giphy.gif&ct=g"></img> :
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