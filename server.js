const express = require('express')
const app = express()
let port = process.env.PORT || 8888

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/falloutinfo.html")
})

app.get("/NukaStyle", (req,res)=>{
    res.sendFile(__dirname+"/TheNukaWeb.css")
})
app.listen(port, ()=>console.log(port))