import React from "react";
import AccountForm from "./AccountForm";

function Login(){
    return(
        <AccountForm postRoute="login" account="Don't" link="/register" about="Log into your account" other="Register" button="Log In"/>
    )
}

export default Login;