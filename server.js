var express = require('express')
var ejs = require('ejs')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var mainRoutes = require('./routes/main')
var app = express()
app.use(mainRoutes)
app.set('views', './views');
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/article',{ useNewUrlParser: true ,useUnifiedTopology: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs')

app.listen(8080, function() {
    console.log('Node.js listening on port ' + 8080)
})