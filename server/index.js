import express from "express";
import connect from "./db/configDb.js";
import userRoutes from "./routes/userRoute.js";
import memoryRoute from "./routes/memoryRoutes.js";
import cors from "cors";

const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());
connect();

app.use("/api", userRoutes);
app.use("/api/memory", memoryRoute);
app.get("/", (req, res) => {
    res.send("Welcome to the Node js Server");
})

app.listen(PORT, () => {
    console.log("Welcome to the Node Js, PORT is running")
})