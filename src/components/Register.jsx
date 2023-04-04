import React from "react";
import AccountForm from "./AccountForm";

// renders the register page at the register route passing in info to account form
function Register(){
    return (
    <div>
        <AccountForm postRoute="register" link="/login" about="Register a new account" button="Register Now" other="Log in" account="Already"/>
    </div>)
}

export default Register;