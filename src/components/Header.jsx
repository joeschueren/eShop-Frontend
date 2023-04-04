import React from "react";

// checks whether or not th user signed in to render buttons or a welcome
let auth = false;
let session = JSON.parse(sessionStorage.getItem("username"));


if(session !== null){
  auth = true;
}

// signs the user out
function handleSignout (){
  sessionStorage.setItem("username", null);
}

// Renders the bootstrap navbar along with conditionally render a cart item counter
// and whether the user is signed in
function Header(props){
    let user = JSON.parse(sessionStorage.getItem("username"));
    return <section id="header" className="nav-header">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid nav-container">
    <a className="navbar-brand logo" href="/">Cart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link header-link" aria-current="page" href="/"><i className="fa-solid fa-house-chimney"></i></a>
        </li>
        <li className="nav-item header-link">
          <a className="nav-link" href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
          {props.info.length > 0 && <div className="cart-counter"> {props.info.length} </div>}
        </li>
      </ul>
      <form className="d-flex">
        { auth ? <div className="account-box"><div className="account-info"><h1 className="welcome-header">Welcome<div className="welcome">{user}</div></h1></div>
        <button className="header-signout" onClick={handleSignout}>Sign Out</button></div>: 
        <div><a href="/login" className="header-login">Log In</a>
        <a href="/register" className="header-register">Register</a></div>}
      </form>
    </div>
  </div>
</nav>
</section>
}

export default Header;