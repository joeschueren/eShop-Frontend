import React from "react";
import AccountForm from "./AccountForm";

// Renders the login page at the login route by passing props on which account form it is
function Login(){
    return(
        <AccountForm postRoute="login" account="Don't" link="/register" about="Log into your account" other="Register" button="Log In"/>
    )
}

export default Login;