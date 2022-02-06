const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
const Routes = require("../routes/AppRouter")
const bodyParser = require('body-parser')

//json response
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }))

//public files
app.use(express.static("public"))

//solover cors //frontend host
app.use(cors())
//routes
app.use("/", Routes)

module.exports = app