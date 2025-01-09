const express = require('express')
const mysql = require('mysql2')

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'webshop'
})

db.connect((error) => {
    if (error) {
        console.log('Error connecting to db', error)
        return
    }
    console.log('Db Connection succesfull')
})

app.set('view engine', 'ejs')

app.listen(3000)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    db.query('select * from products', (error, result) => {
        if (error) {
            console.log('error selecting products', error)
            res.render('index', { title: 'Products', error: error})
        } else {
            console.log('products:', result)
            res.render('index', { title: 'Products', productsFromDb: result})
        }
    })
})

app.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})