const express = require('express')
const mysql = require('mysql2')

const app = express()

const appConstants = {
    productsPerPage: 5
}

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
    const page = parseInt(req.query.page) || 1
    const productId = req.query.productId || 1;
    const offset = (page - 1) * appConstants.productsPerPage
    const query = `select * from products limit ${offset}, ${appConstants.productsPerPage}`
    db.query(query, (error, result) => {
        if (error) {
            console.log('db error selecting products', error)
            res.render('index', { title: 'Products', error: error })
        } else {
            const products = result ?? []
            getProductsCount(res, products, 'Products', page)
        }
    })

    // const query1 = 'SELECT * FROM products LIMIT ?, ?'
    // db.execute(query1, [offset.toString(), appConstants.productsPerPage.toString()], (err, result) => {
    //     if (err) {
    //         console.log('db error selecting products', err)
    //         res.render('index', { title: 'Products', error: err })
    //     } else {
    //         const products = result ?? []
    //         getProductsCount(res, products, 'Products', page)
    //     }
    // })

    // const query2 = 'select * from products where id = ?'
    // db.execute(query2, [productId], (err, result) => {
    //     if (err) {
    //         console.log('db error selecting products', err)
    //         res.render('index', { title: 'Products', error: err })
    //     } else {
    //         const products = result ?? []
    //         getProductsCount(res, products, 'Products', page)
    //     }
    // })
})

app.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

function getCategoriesFromDb(res, products, title) {
    db.query('select * from categories', (error, result) => {
        if (error) {
            res.render('index', { title: title, error: 'Db Error!!!' })
        } else {
            // console.log(`Products: ${products}, categories: ${result ?? []}`)
            res.render('index', { categories: result, products: products, title: title })
        }
    })
}

function getProductsCount(res, products, title, currentPage) {
    db.query('select count(*) as count from products', (error, result) => {
        if (error) {
            res.render('index', { title: title, error: 'Db Error!!!' })
        } else {
            const productsCount = result[0].count
            const totalPages = Math.ceil(productsCount / appConstants.productsPerPage)
            res.render('index', { title: title, products: products, totalPages: totalPages, currentPage: currentPage })
        }
    })

}