const express=require("express")
const app=express()
const port=4000
var cors=require('cors')
const mongoose=require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

// Use the cors middleware with specific origin(s)
const corsOptions = {
    origin: 'https://bookstore-bay-delta.vercel.app/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  app.use(cors(corsOptions));
app.use(express.json())

const mongouri=process.env.MONGO_URL;

const connect=async()=>{
    await mongoose.connect(mongouri)
    console.log("Now connected to mongo")
}

connect();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use("/api",require('./routes/register'))
app.use("/api",require('./routes/login'))

app.listen(port,()=>{
    console.log(`App listening on port http://127.0.0.1:${port}`)
})

