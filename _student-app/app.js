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
  }  entries.push({ //creating new object, pushing it into the entries array
    title: req.body.title, 
    body: req.body.body, 
    published: new Date()
  })
  res.redirect("/") // back to the root of the folder
})