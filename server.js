const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080
const api = require("./routes/apiRoutes")
const html = require("./routes/htmlRoutes")


app.use(express.urlencoded({extended:true})) 
app.use(express.json())
app.use(express.static("public")) // front end files


app.use(api)
app.use(html)



app.listen(PORT, function(){
    console.log(`App running on port: http://localhost:${PORT}`)
})