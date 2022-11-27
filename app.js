const express = require('express')
const app = express()
// require handlebar
const exphbs = require('express-handlebars')

// start template engine
app.engine('handlebars', exphbs({defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const port = 3000

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

// listen
app.listen(port, () => {
  console.log(`express is running on localhost${port}`)
})