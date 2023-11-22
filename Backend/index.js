const express=require("express")
const app=express()
const port=4000
var cors=require('cors')
const mongoose=require('mongoose')

const mongouri="mongodb+srv://jake:newjake@cluster0.w095wjm.mongodb.net/"

const connect=async()=>{
    await mongoose.connect(mongouri)
    console.log("Now connected to mongo")
}

app.get("/",(req,res)=>{
    res.send("Hey there!")
})

app.use(cors)

app.use(express.json())

connect()
app.listen(port,()=>{
    console.log(`App listening on port http://127.0.0.1:${port}`)
})

