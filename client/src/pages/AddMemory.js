import react, {useState} from "react";
import Data from "../components/fetchingUserData.js";

const AddMemory = () => {
    const [form, setForm] = useState({
        title:"",
        description:"",
        image:""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:8000/api/memory/post", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(form)
            });
            const data = await response.json();
            console.log(data);
            alert("Memory Added Succesfully")
        }
        catch(error){
            console.log("Error", error);
        }
    }

    return(
        <div>
            <h1>Welcome to the Add Memory in React</h1>
            <form onSubmit={handleSubmit}>
                <input type="name"
                name="title"
                placeholder="Enter Title"
                value={form.title}
                onChange={handleChange}
                />
                <br />
                <input type="name"
                name="description"
                placeholder="Enter Descrption"
                value={form.description} 
                onChange={handleChange}
                />
                <br />
                <input type="name"
                name="image"
                placeholder="Enter Image  URL"
                value={form.image}
                onChange={handleChange}
                />
                <br/>
                <button type="submit">Add Memory</button>

            </form>
            <div>
                <Data />
            </div>
        </div>
    )
}

export default AddMemory;