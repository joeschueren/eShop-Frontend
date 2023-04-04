import React from "react";
import AccountForm from "./AccountForm";

function Register(){
    return (
    <div>
        <AccountForm postRoute="register" link="/login" about="Register a new account" button="Register Now" other="Log in" account="Already"/>
    </div>)
}

export default Register;