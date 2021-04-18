const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const hbs = require("hbs")
const port = process.env.PORT || 3000
const templatepath = path.join(__dirname + "/template/views")
const partialspath = path.join(__dirname + "/template/partials")

require("dotenv").config()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public")) //linking external css to handlebars

// view engine
app.set("view engine", "hbs")
app.set("views", templatepath)
hbs.registerPartials(partialspath)
// use routes
app.use("/", require("./routes/routes"))

app.listen(port, () => {
    console.log(`server is up and running at http://localhost:${3000}`)
})
