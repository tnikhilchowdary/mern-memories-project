import React, { useEffect, useState } from "react";

const FetchingUserData = () => {
    const [memory, setMemory] = useState([]);

    useEffect(() => {
        const fetchMemories = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/memory");
                const data = await response.json();
                console.log("DATA FROM BACKEND:", data);
                setMemory(data.memory);
            } catch (error) {
                console.log("Error in Fetching Data", error);
            }
        };
        fetchMemories();
    }, []);

    return (
        <div>
            {memory.length === 0 ? (
                <p>No Memories</p>
            ) : (
                memory.map((item) => (
                    <div key={item._id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button>Delete</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default FetchingUserData;
