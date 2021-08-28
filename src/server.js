import express from "express";

const app = express();
const PORT=4000;

app.get("/", (req, res)=>{
    return res.send("<h1>It works!</h1>");
})


const handleListening = () =>{
    console.log(`✅ Server is open! http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);