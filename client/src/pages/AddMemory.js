import React, { useState } from "react";
import Data from "../components/fetchingUserData.js";
import "./AddMemory.css";

const AddMemory = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/memory/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log(data);
      alert("Memory Added Successfully");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="add-memory-container">

      <h1 className="add-memory-title">Welcome to the Add Memory in React</h1>

      <form onSubmit={handleSubmit} className="add-memory-form">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Enter Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Enter Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <button type="submit">Add Memory</button>
      </form>

      <Data />
    </div>
  );
};

export default AddMemory;
