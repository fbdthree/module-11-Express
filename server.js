// Import Express package.
const express = require("express")
// Import routes.
const api = require("./routes/apiRoutes")
const html = require("./routes/htmlRoutes")

// Assign port.
const PORT = process.env.PORT || 3003

// Create express instance.
const app = express()
// Middleware used to encode data onto outgoing data (URLs).
app.use(express.urlencoded({extended:true})) 
// Middleware to parse incoming JSON requests.
app.use(express.json())
// Middleware establishing access to `public` file.
app.use(express.static("public")) // front end files
// Tell Express to use API middleware function for incoming requests.
app.use(api)
// Tell Express to use HTML middleware function for incoming requests.
app.use(html)

// Listen to the port and console log the message whene the server starts.
app.listen(PORT, function(){
    console.log(`App running on port: http://localhost:${PORT}`)
})