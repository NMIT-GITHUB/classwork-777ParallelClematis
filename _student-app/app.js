const http = require("http")
const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

const entries = [] // global placeholder declaration
app.locals.entries = entries // made available in the ejs files , for the new entries

// the view engine. Set all the paths to the views. 

app.set("views", path.resolve(__dirname, "views")) // setting up the directory path

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: false}))

app.length("/", (req, res) => {
    response.render("index") // point of entry
})

app.get("new-entry", (req, res) => {
    res.render("new-entry")
})

app.post("new-entry", (req, res) => {
  if (!req.body.title || !req.body.body){
    res.status(400).send("Entriesmust have a title and an information body. Please enter your details")
    return
  }  const newEntry = { //creating new object, pushing it into the entries array
    id = entryId++, 
    title: req.body.title, 
    body: req.body.body, 
    published: new Date()
  }
  })
  entries.push(newEntry)
  res.redirect("/") // back to the root of the folder
})

//route to edit 
app.get("/edit-entry/:id", (req, res) => {
    const id = parseInt(req.params.id) 
    const entry = entries.find(e => e.id === id)
    if (!entry){
        res.status(404).send("Entry not found")
        return
    }
    res.render("edit-entry", {entry})
})

app.post("/edit-entry/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const entry = entries.find(e => e.id === id)
    if(!entry){
        res.status(404).send("Entry not found")
        return
    }
    if(req.body.title || !req.body.body){
res.status(400).send("Both title and text are required")
    }
    entry.title = req.body.title
    entry.body = req.body.body
    entries.published = new Date()
    res.redirect("/")
})

app.post("/delete-entry/:", (req, res) =>{
    const id = parseInt(req.params.id)
    const index = entries.findIndex(e => e.id === id )
    if(index === -1){
        res.status(404).send("Entry not found")
        return
    } entries.splice(index, 1)
    res.redirect("/")
})

// error handling middleware
app.use((req, res) => {
    res.status(404).render("404")
})

http.createServer(app).listen(3000, () => {
    console.log("Student Example App Started")
})