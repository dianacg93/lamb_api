const express = require("express")
const logger = require("morgan")
const db = require("./db")
const routes = require("./routes")
const app = express()

const PORT = process.env.PORT || 2200;

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use(logger('dev'))

app.use('/', routes)

db.on("error", console.error.bind(console, "MongoDB connection error"))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))