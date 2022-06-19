const express = require("express")
const bodyParser = require("body-parser")
const app = express();

//MIDDLEWARE
app.use(bodyParser.json());


app.listen(4000, () => {
    console.log("LISTENING")
});

