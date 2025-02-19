//_MIDDLEWARE
const express = require("express")
const morgan = require("morgan")

const app = express() // created express app 

// this is middleware. it is route handling
app.use((req, res, next) => {
    if (req.url === "/") { 
        next()
    } else if (req.url === "/throw") { // throw an error of the wrong error
        throw new Error("Wrong Path!")
    } else {
        next("You did not visit the root!")
    }
}
)
// also middleware, successful 
app.use((req, res) => {
    res.send("Welcome to the home page")
})
//logging errors to the cnosole, and putting error code. this would show up on postman. 
app.use((err, req, res, next) =>{
    console.error(err)
    res.status(500)
})
//more error handling, to catch any error that there is
app.use((err, req, res, next) => {
    res.send("Error Message" + err)
}) // Error message: <error details>

//SERVER
app.listen(3000, () => { 
    console.log("App Started")
})