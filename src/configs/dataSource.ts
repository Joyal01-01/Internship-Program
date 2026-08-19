import { DataSource } from "typeorm"
import { User } from "../Database/entity/user.entity"
import "reflect-metadata"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "joyal",
    password: "Joyal@123",
    database: "mern",
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
})



export const initializeDatabase =async ()=>{
    try{
       AppDataSource.initialize();
        console.log("Database Connected")
        return AppDataSource;
    } catch(error){
        console.log("Filed to connect Database",error);
        throw error; 
    }

    
}