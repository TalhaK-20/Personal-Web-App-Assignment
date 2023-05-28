
const express = require("express")
const app = express()
const path = require("path")

const port = 3000


app.use(express.static("public"))

app.set("view engine", "ejs")


app.get("/",(req,res)=>{
    res.render("Index.ejs")
})


app.get("/Favorite_Personality",(req,res)=>{
    res.render("Favorite Personality.ejs")
})


app.get("/Favorite_City",(req,res)=>{
    res.render("Favorite City.ejs")
})


app.get("/Tourism",(req,res)=>{
    res.render("Tourism.ejs")
})


app.get("/Contact",(req,res)=>{
    res.render("Contact.ejs")
})


app.get("/*",(req,res)=>{
    console.log("Wrong Url Brother")
})
 

app.listen(port,() => {
    console.log(`Server listening at port ${port}`);
})

