import "dotenv/config"
import express from "express"
const app = express()
app.use(express.json())

const Port = process.env.PORT || 4000;

app.listen(Port,()=>{
    console.log(`Server is running on ${Port}`)
})