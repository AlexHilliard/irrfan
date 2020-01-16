const express = require('express')
const app = express()
let port = process.env.PORT || 8888

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/falloutinfo.html")
})

app.get("/home", (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.listen(port, ()=>console.log(port))