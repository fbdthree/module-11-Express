// Create new instance of `Router` class and assign to const `app`
const app = require("express").Router()
// Import file system package to read and write to files.
const fs = require("fs")
// Import database.
let db = require("../db/db.json")

// Create route that responds to `post` request by creating new note and adding it to JSON file.
app.post("/api/notes",function(req,res){
    // Creat new object holding incoming note info.
    let newNote = {
        // Create a random ID.
        id: Math.floor(Math.random() * 999),
        title: req.body.title,
        text: req.body.text
    }
    // Push `newNote` to `db` array.
    db.push(newNote)
    // Print what is in `db` to console log.
    console.log("POST",db)
    // Write `db` array to JSON file.
     fs.writeFileSync("./db/db.json", JSON.stringify(db),function(err,data){
        // If there is an error, throw it.
        if (err) throw err;
     })
    res.json(db)
})

// Create route that replies to `get` requests by reading json file and returing contents as json.
app.get("/api/notes",function(req,res){
    // Read file and parse it, in json as an object, to `db` (database array).
    db =JSON.parse( fs.readFileSync("./db/db.json"))
    res.json(db)
})

// Create route that replies to `delete` request by deleting a specified note identifid by and ID.
app.delete("/api/notes/:id",function(req,res){
    let tempNotes = []
    // Use `forEach` loop to push all notes with IDs that do not match the note to be deleted.
    db.forEach(element => {
        if(element.id != req.params.id){
            tempNotes.push(element)
        }
    })
    // Place the updated notes in the `db` array.
    db = tempNotes
    // Write the updated `db` to the `db.json` file in json format.
     fs.writeFileSync("./db/db.json", JSON.stringify(db),function(err,data){
        if (err) throw err;
     })
     // Respond to the request in json.
    res.json(db)
})

// Export `app` object.
module.exports = app;
