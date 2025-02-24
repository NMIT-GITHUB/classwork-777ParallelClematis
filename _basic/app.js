// _BASIC
const express = require("express") // express.js module
const log = require("morgan") // use morgan module
const http = require("http") // use http module

const app = express() // creating an express.js app 

app.use((req, res, next) => { // request, response and Next function
const minute = new Date().getMinutes() //create a constant that holds the current time minutes
if(minute % 2 === 0){ // if the current time minutes remainder of 2 === 0, then 
next() //continue to the next function
}else{ //otherwise
    res.statusCode = 403 //provide error code
    res.end("Not Authorised") // end the response providing the reason
}
})


app.use((req, res) => {
    res.writeHead(200, {"Content-Type":"text/plain"}) // create a callback handler request status code 200
    res.end("Hello World") // end the response providing the reason
})

http.create(app).listenTo(3000) // create a local server using port 3000