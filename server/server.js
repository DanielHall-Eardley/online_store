const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:8080/store")
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.listen(process.env.port || 8080, ()=>{
    console.log("listening for requests")
})