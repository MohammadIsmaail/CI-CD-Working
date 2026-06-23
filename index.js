import "dotenv/config"
import express from "express"
const app = express()

const Port = process.env.PORT || 4000;

app.listen(Port,()=>{
    console.log(`Server is running on ${Port}`)
})