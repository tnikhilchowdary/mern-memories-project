import Memory from "../schema/memorySchema.js";

export const getMemory = async (req, res) => {
    try{
        const memory = await Memory.find({});
        res.status(200).json({memory});
    }
    catch(error){
        res.status(500).json({message:"Error in fetching data", error});
        console.error(error, "Error");
    }
}

export const createMemory = async (req, res) => {
    try{
        const {title, description, image} = req.body;
        const newMemory = new Memory({
            title,
            description,
            image
        });
        const savedMemory = await newMemory.save();
        res.status(201).json({
            message:"Created Sucessfully",
            memory:savedMemory
        })
    }
    catch(error){
        console.error("Error", error);
        res.status(500).json({message:"Error in Creating!"})
    }
}

export const updateData = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description, image} = req.body;
        const updatedMemory = await Memory.findByIdAndUpdate(
            id,
            {title, description, image},
            {new:true}

        )
        if(!updatedMemory){
            return res.status(404).json({message:"Memory Not Found"});
        }
        res.status(200).json({message:"Memory Updated Succesfully",
            memory:updatedMemory
        });
    }
    catch(error){
        console.error("Error", error);
        res.status(500).json({
            message:"Error Updating Code",
            error:error.message
        });
    }
}

export const deleteUpdate = async(req, res) => {
    try{
        const {id} = req.params;
        const deleteMemory = await Memory.findByIdAndDelete(id);
        if(!deleteMemory){
            return res.status(401).json({message:"Memory Not Found"});
        }
        res.status(200).json({message:"Memory Deleted Successfully"});
    }
    catch(error){
        console.error(error);
        res.status(401).json({message:"Error Deleting Messages"})
    }
}