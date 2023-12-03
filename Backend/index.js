const express=require("express")
const app=express()
const port=4000
var cors=require('cors')
const mongoose=require('mongoose')


app.use(cors())
app.use(express.json())

const mongouri="mongodb+srv://jake:newjake@cluster0.w095wjm.mongodb.net/"

const connect=async()=>{
    await mongoose.connect(mongouri)
    console.log("Now connected to mongo")
}

connect();

app.use("/api",require('./routes/register'))
app.use("/api",require('./routes/login'))

app.listen(port,()=>{
    console.log(`App listening on port http://127.0.0.1:${port}`)
})

