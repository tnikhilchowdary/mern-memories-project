import express from "express";
import connect from "./db/configDb.js";
import cors from "cors";
import userRoutes from "./routes/userRoute.js";

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
connect();

app.use("/api", userRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to the Node js Server");
})

app.listen(PORT, () => {
    console.log("Welcome to the Node Js, PORT is running")
})