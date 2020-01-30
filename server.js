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
app.get("/Classes-Brawler", (req,res)=>{
    res.sendFile(__dirname+"/falloutCB.html")
})
app.get("/Classes-Courtier", (req,res)=>{
    res.sendFile(__dirname+"/falloutCC.html")
})
app.get("/Classes-Friend_of_Animals", (req,res)=>{
    res.sendFile(__dirname+"/falloutCFoA.html")
})
app.get("/Classes-Gunslinger", (req,res)=>{
    res.sendFile(__dirname+"/falloutCG.html")
})
app.get("/Classes-Scientist", (req,res)=>{
    res.sendFile(__dirname+"/falloutCSci.html")
})
app.get("/Classes-Survivalist", (req,res)=>{
    res.sendFile(__dirname+"/falloutCSur.html")
})
app.get("/Classes-Raider", (req,res)=>{
    res.sendFile(__dirname+"/falloutCR.html")
})
app.get("/Classes-Wanderer", (req,res)=>{
    res.sendFile(__dirname+"/falloutCWan.html")
})
app.get("/Classes-Wasteland_Medic", (req,res)=>{
    res.sendFile(__dirname+"/falloutCM.html")
})
app.get("/Feats", (req,res)=>{
    res.sendFile(__dirname+"/falloutF.html")
})
app.get("/Skills", (req,res)=>{
    res.sendFile(__dirname+"/falloutS.html")
})
app.get("/Traits", (req,res)=>{
    res.sendFile(__dirname+"/falloutT.html")
})
app.get("/Equipment-Armor", (req,res)=>{
    res.sendFile(__dirname+"/falloutEA.html")
})
app.get("/Equipment-Weapons", (req,res)=>{
    res.sendFile(__dirname+"/falloutEW.html")
})
app.get("/Items", (req,res)=>{
    res.sendFile(__dirname+"/falloutI.html")
})
app.get("/GMing", (req,res)=>{
    res.sendFile(__dirname+"/falloutGM.html")
})

app.use(express.static(__dirname));
app.listen(port, ()=>console.log(port))