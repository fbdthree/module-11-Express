// Create new instance of `Router` class and assign to const `app`
const app = require("express").Router()
// Import Path package.
const path = require("path")

// Route that will respond to `get` request by sending back the `index.html` file.
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})
// Route that will respond to `get` request by ending back the `notes.html` file.
app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname,"../public/notes.html"))
})

// Export `app` object.
module.exports = app;
