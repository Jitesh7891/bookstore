const express=require("express")
const app=express()
const port=4000
var cors=require('cors')
const mongoose=require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

// app.use(cors(
//     {
//         // origin: ["https://deploy-mern-frontend.vercel.app"],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ));

app.use(cors())
app.use(express.json())

const mongouri=process.env.MONGO_URL;

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

