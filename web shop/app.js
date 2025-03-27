import express from 'express'
import mysql from 'mysql2/promise'
import productRoutes from './routes/productRoutes.js'
import homeRoute from './routes/homeRoute.js'
import blogRoutes from './routes/blogRoutes.js'
import aboutRoutes from './routes/aboutRoutes.js'

const app = express()

export const appConstants = {
    productsPerPage: 5
}

const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'webshop',
    password: 'password',
    multipleStatements: true
});

app.locals.db = db

app.set('view engine', 'ejs')

app.listen(3000)

app.use((req, res, next) => {
    res.locals.pageStyles = []
    next()
})
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoute)

app.use('/product', productRoutes)

app.use('/blog', blogRoutes)

app.use('/about', aboutRoutes)