import React, { useEffect, useState } from "react";
import "./FetchingUserData.css";  // 🔥 attach CSS here

const FetchingUserData = () => {
    const [memory, setMemory] = useState([]);

    useEffect(() => {
        const fetchMemories = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/memory");
                const data = await response.json();
                setMemory(data.memory);
            } catch (error) {
                console.log("Error in Fetching Data", error);
            }
        };
        fetchMemories();
    }, []);

    const deleteMemory = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/memory/${id}`, {
                method: "DELETE",
            });

            const data = await response.json();
            console.log(data);

            setMemory(memory.filter((item) => item._id !== id));
            alert("Memory Deleted Successfully");
        } catch (error) {
            console.log("Error Deleting Memory", error);
        }
    };

    return (
        <div className="memory-container">
            {memory.length === 0 ? (
                <p>No Memories</p>
            ) : (
                memory.map((item) => (
                    <div className="memory-card" key={item._id}>
                        <h2 className="memory-title">{item.title}</h2>
                        <p className="memory-desc">{item.description}</p>
                        <button
                            className="delete-btn"
                            onClick={() => deleteMemory(item._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default FetchingUserData;
