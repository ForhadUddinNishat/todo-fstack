import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
//const express = require("express");

dotenv.config()

const app= express();
const PORT= process.env.PORT || 5001;

connectDB();
app.use(express.json())
app.use("/api/notes", notesRoutes)


app.listen(PORT, () =>{
    console.log("Server started at PORT:", PORT);

})

// l4AIExgzkRpiuutX

//mongodb+srv://idkshafin01_db_user:l4AIExgzkRpiuutX@cluster0.fmfp4sg.mongodb.net/?appName=Cluster0
