const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const saltRounds = 10;



app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/shopDB");


const userSchema = new mongoose.Schema({
    email: String,
    hashedPassword: String
})


const User = mongoose.model("User", userSchema)

app.post("/register", function(req, res){
    const email = req.body.email;
    let  auth = false;
    let message ="";

    console.log("posted register");

    User.findOne({email: email}).then(function(foundUser){
        console.log("in finder");
        if(foundUser){
            message = "Username already taken try another.";
            res.json([auth, message])
        }
        else{
            bcrypt.hash(req.body.password, saltRounds, function(err, hash){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("sending back info");
                    const newUser = new User({
                        email: email,
                        hashedPassword: hash
                    })
                    
                    newUser.save();
        
                    auth = true;

                    res.json([auth, message]);
                
                }})
        }
    
    })


    
});

app.post("/login", function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    console.log("posted log in");

    let auth = false;
    let message = "";
    User.findOne({email: email}).then(function(foundUser){
        if(foundUser){
            bcrypt.compare(password, foundUser.hashedPassword, function(err, result){
                if(result){
                    console.log("sending info back")
                    auth = true;
                    res.json([auth, message])
                }
                else{
                    console.log("sending error")
                    auth = false;
                    message = "Information entered did not match any in our system";
                    res.json([auth, message])
                }
            })
        }
        else{
            console.log("sending error");
            message = "Information entered did not match any in our systems";
            res.json([auth, message]);
        }
    })
})


app.listen(5000, function(){
    console.log("Server running on port 5000");
})