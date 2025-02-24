// _API
const express = require("express") // express.js module

const app = express() // initialise the app with express

app.get("/random/:min/:max", (req, res) => { // extract min and max from the URL
    const min = parseInt(req.params.min) //turn it from a string to an integer. 
    const max = parseInt(req.params.max) //turn it from a string to an integer

    if (isNaN(min) || isNan(max)){ // if either of them are not numbers
        res.status(400) // the status is 400 (OK)
        res.json({error: "Bad Request"}) // return an error
        return
    }

    const result = Math.round(Math.random() * (max-min) + min) // take the same min and max values (in the consts above) and 
    res.json({result: result}) // send a response as a .JSON format
})
// creating a local host server
app.listen(3000, () => { //defines the port that its in
    console.log("App started on port 3000") // will be spat out in console
})

/*Result will be like this:

{"result": 100}

*/