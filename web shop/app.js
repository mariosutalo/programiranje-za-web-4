import express from 'express'
import mysql from 'mysql2/promise'
import productSpecsToArray from './util/util.js'
import homeRouter from './routes/homeRoutes.js'
import productRouter from './routes/productRoutes.js'
import aboutRouter from './routes/aboutRoute.js'
import blogRouter from './routes/blogRoutes.js'

const app = express()

export const appConstants = {
    productsPerPage: 5
}

// Create the connection to database
export const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'webshop',
    password: 'password',
    multipleStatements: true
});

app.set('view engine', 'ejs')

app.listen(3000)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRouter)

app.use('/product', productRouter)

app.use('/blog', blogRouter)

app.use('/about', aboutRouter)