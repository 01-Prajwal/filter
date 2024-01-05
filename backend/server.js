require("dotenv").config()
const express = require('express')
const cors = require("cors")
const data = require('../backend/movies.json')
const app = express()
const MovieRouter = require("./Routes/Movie")
const mongoose = require("mongoose")


app.use(cors())
app.use(express.json())

const port = process.env.PORT||8080

app.use('/api',MovieRouter)
mongoose.connect(process.env.MONGO)


.then(()=>{
    console.log("DEVELOPMENT IN PROGRESS");
    
})
.catch((err)=>{
    console.log(err);
    
})
// mongodb+srv://search1:<password>@cluster0.a4ydfce.mongodb.net/?retryWrites=true&w=majority


app.listen(port,()=>{

    console.log(`Listening on PORT${port}..`);
    

})
