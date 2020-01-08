const express = require('express')
const app = express()
let port = process.env.PORT | 88

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/falloutinfo.html")
})
app.listen(port, ()=>console.log(port))