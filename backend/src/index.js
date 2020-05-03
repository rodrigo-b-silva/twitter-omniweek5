const port = process.env.port || 3000
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb://localhost:27017/twitter', { useNewUrlParser: true })

app.use((req, res, next) => {
    req.io = io;
    return next();
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(require('./routes'))

server.listen(port, () => {
    console.log(`App running on port ${port}`)
})