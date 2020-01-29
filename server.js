const express = require('express')
const app = express()
let port = process.env.PORT || 8888

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/falloutinfo.html")
})
app.get("/PHB", (req,res)=>{
    res.sendFile(__dirname+"/falloutPHB.html")
})
app.get("/Races-Vault_Dweller", (req,res)=>{
    res.sendFile(__dirname+"/falloutRVD.html")
})
app.get("/Races-Ghoul", (req,res)=>{
    res.sendFile(__dirname+"/falloutRG.html")
})
app.get("/Races-Super_Mutant", (req,res)=>{
    res.sendFile(__dirname+"/falloutRSM.html")
})
app.get("/Races-Synth", (req,res)=>{
    res.sendFile(__dirname+"/falloutRS.html")
})
app.get("/Races-Protectotron", (req,res)=>{
    res.sendFile(__dirname+"/falloutRP.html")
})
app.get("/Races-Wastelander", (req,res)=>{
    res.sendFile(__dirname+"/falloutRW.html")
})
app.get("/Races-Zeta", (req,res)=>{
    res.sendFile(__dirname+"/falloutRZ.html")
})
app.use(express.static(__dirname));
app.listen(port, ()=>console.log(port))