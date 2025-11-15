import React, { useEffect, useState } from "react";
import "./FetchingUserData.css";  // 🔥 attach CSS here

const FetchingUserData = () => {
    const [memory, setMemory] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({
        title:"",
        description:"",
        image:""
    });

    const startEdit = (item) => {
        setEditingId(item._id);
        setEditData({
            title:item.title,
            description:item.description,
            image:item.image
        });
    }

    const saveEdit = async () => {
        try{
            await fetch(`http://localhost:8000/api/memory/${editingId}`, {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(editData)
            });
            setMemory(memory.map((m) => 
                m._id === editingId ? {...m, ...editData} : m
            ));

            alert("Memory Updated Successfully");
            setEditingId(null);
        }
        catch(error){
            console.log("Error Updating Memory", error);
        }
    }

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
        
        {editingId === item._id ? (
          <>
            <input
              value={editData.title}
              onChange={(e) => setEditData({ ...editData, title: e.target.value })}
            />
            <input
              value={editData.description}
              onChange={(e) => setEditData({ ...editData, description: e.target.value })}
            />
            <input
              value={editData.image}
              onChange={(e) => setEditData({ ...editData, image: e.target.value })}
            />

            <button onClick={saveEdit}>Save</button>
            <button onClick={() => setEditingId(null)}>Cancel</button>
          </>
        ) : (
          <>
            <h2 className="memory-title">{item.title}</h2>
            <p className="memory-desc">{item.description}</p>
            <p>{item.image}</p>

            <button className="delete-btn" onClick={() => deleteMemory(item._id)}>
              Delete
            </button>
            <button onClick={() => startEdit(item)}>Edit</button>
          </>
        )}

      </div>
    ))
  )}
</div>


    );
};

export default FetchingUserData;
