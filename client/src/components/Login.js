import React, {useState} from "react";
import {Link} from "react-router-dom";
const Login = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:5000/api/login", {
                method:"POST",
                headers:{
                    "content-Type":"application/json",
                },
                body:JSON.stringify(formData),
            });
            const data = await response.json();
            if(response.ok){
                alert("Login Succesfully");
            }
            else{
                alert("Login failed");
            }
        }
        catch(error){
            console.error("Error", error);
            alert("Something Went Wrong!");
        }
    }

    return(
        <div>
            <h1>Welocome to the Login page</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="email"
                    placeholder="Enter Email"
                    name="email"
                    onChange={handleChange}
                    />
                    <br/>
                    <input type="password"
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleChange}
                    />
                    <button type="submit">Login</button>
                </form>
                
                <p>If you dont have account Please <Link to="/signup">Signup here</Link></p>
            </div>
        </div>
    )
}

export default Login;