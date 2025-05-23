import express from 'express'
import mysql from 'mysql2/promise'
import productSpecsToArray from './util/util.js'
import homeRouter from './routes/homeRoutes.js'
import productRouter from './routes/productRoutes.js'
import aboutRouter from './routes/aboutRoute.js'
import blogRouter from './routes/blogRoutes.js'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/userRoutes.js'
import { v4 as uuidv4 } from 'uuid'

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

app.use(cookieParser())

app.use((req, res, next) => {
    let sessionId = req.cookies.sessionId
    if (!sessionId) {
        sessionId = uuidv4()
        res.cookie('sessionId', sessionId, {
            maxAge: 365 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict'
        })
    }
    next()
})

app.use(express.static('public'))

app.use(async (req, res, next) => {
    const cartItemCountQuery = `select count(*) as cart_items_count
                                from cart_items
                                where session_guid = ?`
    const [cartCountResult, cartItemFields] = await db.execute(cartItemCountQuery, [req.cookies.sessionId])
    console.log('Cart items count', cartCountResult)
    const cartItemsCount = cartCountResult[0].cart_items_count
    app.locals.cartItemsCount = cartItemsCount
    next()
})



// middleware
app.use((req, res, next) => {
    res.app.locals.pageStyles = []
    next()
})
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRouter)

app.use('/user', userRoutes)

app.use('/product', productRouter)

app.use('/blog', blogRouter)

app.use('/about', aboutRouter)