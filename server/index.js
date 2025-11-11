import express from "express";

const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Node js Server");
})

app.listen(PORT, () => {
    console.log("Welcome to the Node Js, PORT is running")
})