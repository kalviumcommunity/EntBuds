const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/EntBuds", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
})
.then(() => {
    app.listen("7000", () => {
        console.log("Connection is successful");
    })
})
.catch((error) => {
    console.log(error);
})

app.post('/comment', async(req,res) => {

} )