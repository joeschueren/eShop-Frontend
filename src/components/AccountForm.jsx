import React, {useState} from "react";
import {useNavigate} from "react-router-dom";



function AccountForm(props){

    const navigate= useNavigate();
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [output, setOutput] = useState("");


    function handleClick(event){
        event.preventDefault();
        if(emailValue.length < 8){
            setOutput("username must be 8 characters or longer");
        }
        else if(passwordValue.length < 8){
            setOutput("password must be 8 characters or longer");
        }
            setOutput("clicked");
            fetch('http://localhost:5000/'+props.postRoute, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailValue,
                    password: passwordValue
                })
                })
                .then(response => {return response.json()})
                .then(function(data){
                console.log(data);
                let auth = data[0];
                console.log(auth);
                if(auth){
                    console.log("setting into session storage")
                    sessionStorage.setItem("username", JSON.stringify(emailValue));
                    navigate("/");
                    window.location.reload();
                }
                else{
                    setOutput(data[1]);
                }})
    }

    function handleChange(e){
        if(e.target.name === "user"){
            setEmailValue(e.target.value);
            console.log(emailValue);
        }
        if(e.target.name === "pass"){
            setPasswordValue(e.target.value);
            console.log(passwordValue);
        }
    }

    return(<div className="container-fluid">
    <div className="row">
        <div className="col-lg-12 form-div">
            <div className="register-prompt">
                <p>{props.about}</p>
            </div>
            <div className="register-input">
                <p>Username: </p>
                <input className="form-input" name="user" value={emailValue} onChange={handleChange}placeholder="Username"></input>
            </div>
            <div className="register-input">
                <p>Password: </p>
                <input className="form-input" name="pass" value={passwordValue} onChange={handleChange} type="password" placeholder="Password"></input>
                <p id="output" className="output">{output}</p>
            </div>
            <div className="button-container">
                <button className="form-button" type="submit" onClick={handleClick}>
                    {props.button}
                </button>
            </div>
            <div className="form-link">
                <p>{props.account} have an account?<br/><a href={props.link} className="swap-link">{props.other} Here</a></p>
                
            </div>
        </div>
    </div>
</div>)
}


export default AccountForm;