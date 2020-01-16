const express = require('express')
const app = express()
let port = process.env.PORT || 8888

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/falloutinfo.html")
})
app.use(express.static(__dirname));
app.listen(port, ()=>console.log(port))