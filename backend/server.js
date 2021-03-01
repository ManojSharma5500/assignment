const express = require('express')
const app = express() 
const mongoose = require('mongoose')
require('dotenv/config');
const routeUrls = require('./routes/route')
const cors = require('cors')

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true,
      useUnifiedTopology: true },
     () => console.log('connected to DB!')
    )

app.use(express.json())   // activate body parse
app.use(cors())    


app.use('/app',routeUrls)
app.listen(4000, () => console.log("Server is running"))