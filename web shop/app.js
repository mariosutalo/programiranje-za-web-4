import express from 'express'
import mysql from 'mysql2/promise'

const app = express()

const appConstants = {
    productsPerPage: 5
}

// Create the connection to database
const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'webshop',
    password: 'password'
});

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

app.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const productId = req.query.productId || 1;
    const offset = (page - 1) * appConstants.productsPerPage
    const getProductsQuery = `select * from products limit ${offset}, ${appConstants.productsPerPage}`
    const getProductsCountQuery = 'select count(*) as count from products'
    const getCategoriesQuery = 'select * from categories'
    try {
        const [productsResults, fields] = await db.query(getProductsQuery)
        const [productsCountResults, productsCountFields] = await db.query(getProductsCountQuery)
        const [categoriesResult, categoriesFields] = await db.query(getCategoriesQuery)
        const productsCount = productsCountResults[0].count
        const totalPages = Math.ceil(productsCount / appConstants.productsPerPage)
        res.render('index', { title: 'Products', products: productsResults, totalPages: totalPages, currentPage: page })
    } catch (error) {
        console.log('Error connecting to db', error)
        res.render('index', { title: 'Products', error: error })
    }
})

app.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})