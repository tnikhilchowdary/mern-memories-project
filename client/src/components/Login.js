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
    return(
        <div>
            <h1>Welocome to the Login page</h1>
            <div>
                <form>
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
                </form>
                <button type="submit">Login</button>
                <p>If you dont have account Please <Link to="/signup">Signup here</Link></p>
            </div>
        </div>
    )
}

export default Login;