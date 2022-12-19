const app = require("express").Router()
const fs = require("fs")
let db = require("../db/db.json")


app.post("/api/notes",function(req,res){
    let newNote = {
        id: Math.floor(Math.random() * 999),
        title: req.body.title,
        text: req.body.text
    }
    db.push(newNote)
     fs.writeFileSync("./db/db.json", JSON.stringify(db),function(err,data){
        if (err) throw err;
     })
    res.json(db)
})

app.get("/api/notes",function(req,res){
    db =JSON.parse( fs.readFileSync("./db/db.json"))
    res.json(db)
})


app.delete("/api/notes/:id",function(req,res){
    let tempNotes = []
    db.forEach(element => {
        if(element.id != req.params.id){
            tempNotes.push(element)
        }
    })
    db = tempNotes
     fs.writeFileSync("./db/db.json", JSON.stringify(db),function(err,data){
        if (err) throw err;
     })
    res.json(db)
})


module.exports = app;
