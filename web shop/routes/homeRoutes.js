import express from 'express'
import { appConstants, db } from '../app.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const productId = Number.isNaN(parseInt(req.query.productId)) ? 1 : parseInt(req.query.productId)
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

export default router