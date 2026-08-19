import express from "express";
import userRoutes from "./Routes/user.Routes";
import { initializeDatabase } from "./configs/dataSource";


const app=express();
app.use(express.json()); //phrase JSON request bodies

const baseRoute="/api/v1";
app.use(baseRoute,userRoutes);

const PORT = 5000;


initializeDatabase()
.then (()=>{
   app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

    })
})

.catch((error)=>{
    console.log(error);
})
