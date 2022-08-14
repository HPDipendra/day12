import express, { Application } from "express"
// import express from 'express'
import "dotenv/config"
import userRoute from "./routes/userRoute"
import DataSource from "./database/config";
import "reflect-metadata";



const app: Application = express()
// app.use(express.urlencoded())

app.use(express.json());
app.use('/user', userRoute)
app.listen(process.env.PORT, async () => {
    await DataSource.initialize()    //must
    console.log(`the server is running on the port ${process.env.PORT}`);

})
