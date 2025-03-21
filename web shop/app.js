import express from 'express'
import mysql from 'mysql2/promise'
import productSpecsToArray from './util/util.js'

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

app.get('/product', async (req, res) => {
    const productId = req.query.product_id
    const getProductDetailsQuery = `select products.*, product_images.image_url
        from products left join product_images
        on products.id = product_images.product_id
        where products.id = ${productId};`
    try {
        const [productDetailsResult, fields] = await db.query(getProductDetailsQuery)
        // console.log('Product details:', productDetailsResult)
        let product = null
        productDetailsResult.forEach((row) => {
            if (product === null) {
                product = {
                    id: row.id,
                    name: row.name,
                    specs: productSpecsToArray(row.specs),
                    price: row.price,
                    image: row.image_url,
                    stock: row.stock,
                    likes: row.likes,
                    warranty: row.warranty,
                    description: row.description,
                    images: []
                }
            }
            product.images.push(row.image_url)
        })
        if (product !== null) {
            console.log(`product with images, ${product.images}`)
            res.render('product details', { title: product.productName, productDetails: product })
        } else {
            // to do implement product doesnt exit page
        }

    } catch (error) {
        console.log('Error fetching product details', error)
    }
})

app.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

// app.get('/search', async (req, res) => {
//     const searchTerm = req.query.searchTerm
//     const searchProductsQuery = `SELECT * from products where id = ${searchTerm};`;
//     console.log('Search term is:', searchTerm)
//     res.render('about', { title: 'Search Test' })
//     try {
//         const [productsResults, fields] = await db.query(searchProductsQuery)
//         console.log(productsResults)
//     } catch (error) {
//         console.log(error)
//     }
// SELECT * from products where id = 1; delete from product_images;
// })