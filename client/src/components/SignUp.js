import react, {useState} from "react";

const SignUp = () => {
    const [signData, setSignData] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange = (e) => {
        setSignData({
            ...signData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch("http://localhost:5000/api/signup", {
                method:"POST",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify(signData),

            })
            const data = await response.json();
            if(response.ok){
                alert("Sign Up Succesfully");
            }
            else{
                console.log("Signup Error");
            }
        }
        catch(error){
            console.error(error, "Error")
        }
    }

    return(
        <div>
            <h1>Welcome to the Signup Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="name"
                placeholder="name"
                value={signData.name}
                onChange={handleChange}
                />
                <br />
                <input type="email"
                name="email"
                placeholder="Enter Email"
                value={signData.email}
                onChange={handleChange}
                />
                <br />
                <input type="password"
                name="password"
                placeholder="Enter Password"
                value={signData.password}
                onChange={handleChange}
                />
                <br/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}


export default SignUp;